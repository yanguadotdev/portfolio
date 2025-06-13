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
    name: z.string().trim().min(3, 'Nombre requerido'),
    email: z.string().trim().email('Correo inválido'),
    description: z.string().trim().min(15, 'Descripción requerida'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
    { id: 'freelance', label: 'Freelance', checked: false },
    { id: 'laboral', label: 'Full-Time', checked: false },
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
                    <span className='leading-tight text-sm'>¿Qué tipo de colaboración estás buscando?</span>
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
                <InputField
                    value='1.2'
                    placeholder='David Perez'
                    label='¿Cuál es tu nombre?'
                    register={register('name')}
                    error={errors.name}
                />

                <InputField
                    value='1.3'
                    placeholder='[perezdavid@gmail.com]'
                    label='¿A qué correo puedo responderte?'
                    register={register('email')}
                    error={errors.email}
                />

                <TextAreaField
                    className='col-span-2'
                    value='1.5'
                    placeholder='Cuéntame sobre tu idea o necesidad'
                    label='¿Cómo puedo ayudarte?'
                    register={register('description')}
                    error={errors.description}
                />
            </fieldset>

            <Button className='w-full mt-12' variant='primary' type='submit'>
                Hablemos
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
    type?: string;
    className?: string;
}

interface WrapperFieldProps {
    label: string;
    error: any;
    value: string;
    children: React.ReactNode;
    className?: string;
}


const clNameInputField = 'flex w-full border-b border-b-grey py-3 focus:border-b-dark leading-snug hover:border-b-dark'
const clNameInputError = 'border-b-orange-700 focus:border-b-orange-700 hover:border-b-orange-700'

const InputField = (props: InputFieldProps) => {
    const { label, register, error, value, placeholder, type, className } = props;
    return (
        <WrapperField label={label} error={error} value={value} className={className}>
            <input
                placeholder={placeholder}
                className={cn(clNameInputField, error && clNameInputError)}
                type={type || 'text'}
                {...register}
                autoComplete='off'
            />
        </WrapperField>
    );
}

const TextAreaField = (props: InputFieldProps) => {
    const { label, register, error, value, placeholder, className } = props;
    return (
        <WrapperField label={label} error={error} value={value} className={className}>
            <textarea
                placeholder={placeholder}
                className={cn('max-h-24 min-h-min', clNameInputField, error && clNameInputError)}
                {...register}
                autoComplete='off'
                rows={1}
                maxLength={100}
            />
        </WrapperField>
    );
}

const WrapperField = (props: WrapperFieldProps) => {
    const { label, error, value, children, className } = props;
    return (
        <label className={cn('flex flex-col gap-2 justify-between relative', className)}>
            <div className='flex gap-3 items-center'>
                <Item value={value} />
                <span className='leading-tight text-sm'>{label}</span>
            </div>
            {children}
            {error && <p className='text-xs text-orange-700 mt-1 absolute top-full'>{error.message}</p>}
        </label>
    );
}