import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import RadioButton from '@/components/RadioButton';
import Button from '@/components/Button';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
    serviceType: z.enum(['freelance', 'laboral'], {
        message: 'Selecciona un tipo de servicio',
    }),
    name: z.string().min(1, 'Nombre requerido'),
    email: z.string().email('Correo inválido'),
    phone: z.string().optional(),
    description: z.string().min(15, 'Descripción requerida'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
    { id: 'freelance', label: 'Freelance', checked: false },
    { id: 'laboral', label: 'Laboral', checked: false },
]

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error('Error al enviar el mensaje');
            alert('Mensaje enviado correctamente');
        } catch (err) {
            console.error(err);
            alert('Hubo un error al enviar tu mensaje');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <legend className='flex items-center gap-3'>
                    <Item value='1.1' />
                    <span>¿Qué tipo de colaboración estás buscando?</span>
                </legend>
                <div className='flex gap-6 items-center mt-4'>
                    {
                        services.map((service, i) => {
                            return (
                                <RadioButton
                                    key={i}
                                    className='flex-1 text-center'
                                    groupName='Services'
                                    register={register('serviceType')}
                                    option={service} />
                            )
                        })
                    }
                </div>
                {errors.serviceType && <p className='text-xs text-orange-700 mt-1'>{errors.serviceType.message}</p>}
            </fieldset>

            <fieldset className='mt-10 grid grid-cols-2 gap-x-6 gap-y-10'>
                <InputField value='1.2' placeholder='Nombre' label='Tu nombre' register={register('name')} error={errors.name} />

                <InputField value='1.3' placeholder='[david@mail.com]' label='Correo electrónico' register={register('email')} error={errors.email} />

                <InputField value='1.4' placeholder='Optional' label='Teléfono (opcional)' register={register('phone')} error={errors.phone} />

                <InputField value='1.5' placeholder='Cuentame sobre tu idea' label='Descripción' register={register('description')} error={errors.description} />
            </fieldset>

            <Button className='w-full mt-10' variant='primary' type='submit'>
                Enviar
            </Button>
        </form>
    );
}


type ItemProps = {
    value: string;
};

const Item = ({ value }: ItemProps) => {
    return (
        <div className='w-9 h-6 border border-grey flex items-center justify-center'>
            <span className='text-dark-60 text-xs'>{value}</span>
        </div>
    );
};

interface InputFieldProps {
    label: string;
    register: any;
    error: any;
    value: string;
    placeholder?: string;
}


const InputField = (props: InputFieldProps) => {
    const { label, register, error, value, placeholder } = props;
    return (
        <label>
            <div className='flex gap-3 items-center mb-2'>
                <Item value={value} />
                <span>{label}</span>
            </div>
            <input
                placeholder={placeholder}
                className={cn('flex w-full border-b border-b-grey py-3 focus:border-b-dark leading-snug hover:border-b-dark', error && 'border-b-orange-700 focus:border-b-orange-700 hover:border-b-orange-700')}
                type="text"
                {...register}
                autoComplete='off'
            />
            {error && <p className='text-xs text-orange-700 mt-1'>{error.message}</p>}
        </label>
    );
}