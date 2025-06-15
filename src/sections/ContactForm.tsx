import RadioButton from '@/components/RadioButton';
import Button from '@/components/Button';
import { cn } from '@/lib/utils';
import { useContactForm } from '@/hooks/useContactForm';
import Spinner from '@/components/Spinner';
import { FaWhatsapp } from 'react-icons/fa';
import { BiMailSend } from "react-icons/bi";


const services = [
    { id: 'freelance', label: 'Freelance', checked: false },
    { id: 'laboral', label: 'Full-Time', checked: false },
]

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        errors,
        onSubmit,
        isSubmitting
    } = useContactForm();

    return (
        <section>
            <div className="flex flex-col gap-3">
                <div className='flex items-center gap-3'>
                    <Item value='1.0' />
                    <span className='leading-tight text-sm'>¿Cómo quieres que hablemos?</span>
                </div>
                <Button
                    href="/wsp"
                    target="_blank"
                    variant="whatsapp"
                    withEffect={false}
                >
                    <div className='flex items-center gap-2'>
                        <FaWhatsapp className="text-xl" />
                        Hablemos por WhatsApp
                    </div>
                </Button>
            </div>

            <div className="relative flex items-center w-full my-4">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="px-4 text-gray-500 text-sm">o llena este formulario</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <legend className='flex items-center gap-3'>
                        <Item value='1.1' />
                        <span className='leading-tight text-sm'>¿Qué tipo de servicio estás buscando?</span>
                    </legend>
                    <div className='flex flex-wrap gap-6 items-center mt-4'>
                        {
                            services.map((service, i) => {
                                return (
                                    <RadioButton
                                        key={i}
                                        className='flex-1 text-center basis-48'
                                        groupName='Services'
                                        register={register('serviceType')}
                                        option={service}
                                    />
                                )
                            })
                        }
                    </div>
                    {errors.serviceType && <p className='text-xs text-orange-700 mt-1'>{errors.serviceType.message}</p>}
                </fieldset>

                <fieldset className='mt-10 grid 1.5xs:grid-cols-2 gap-x-6 gap-y-10'>
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
                        className='1.5xs:col-span-2'
                        value='1.5'
                        placeholder='Cuéntame sobre tu idea o necesidad'
                        label='¿Cómo puedo ayudarte?'
                        register={register('description')}
                        error={errors.description}
                    />
                </fieldset>

                <Button
                    className={cn('w-full mt-12 h-12 text-base', isSubmitting && 'pointer-events-none')}
                    variant='primary'
                    type='submit'
                    withEffect={false}
                >
                    {isSubmitting
                        ? <Spinner size={24} />
                        : <div className='flex items-center gap-2'>
                            <BiMailSend className="text-xl" />
                            Hablemos
                        </div>}
                </Button>
            </form>
        </section>
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


const clNameInputField = 'flex w-full border-b border-b-grey py-3 focus:border-b-dark text-base leading-snug hover:border-b-dark'
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
                className={cn('max-h-24 min-h-20 1.5xs:min-h-min', clNameInputField, error && clNameInputError)}
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