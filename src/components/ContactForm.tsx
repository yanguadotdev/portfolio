import RadioButton from '@/components/RadioButton'
import SubmitButton from '@/components/SubmitButton'
import Spinner from '@/components/Spinner'
import { translations } from '@/i18n/translations'
import { BiMailSend } from 'react-icons/bi'
import type { Lang } from '@/types'
import { useContactForm } from '@/hooks/useContactForm'
import { cn } from '@/lib/utils'
import Item from '@/components/Item'

const services = [
  { id: 'freelance', label: 'Freelance', checked: false },
  { id: 'laboral', label: 'Full-Time', checked: false },
]

export default function ContactForm({ lang }: { lang: Lang }) {
  const { register, handleSubmit, errors, onSubmit, isSubmitting } = useContactForm(lang)

  const { typeServiceLooking, whatIsName, whatIsEmail, howCanHelpYou, tellMeMore } =
    translations[lang].contact

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend className="flex items-center gap-3">
          <Item value="1.1" />
          <span className="text-sm leading-tight">{typeServiceLooking}</span>
        </legend>
        <div className="mt-4 flex flex-wrap items-center gap-6">
          {services.map((service, i) => {
            return (
              <RadioButton
                key={i}
                className="flex-1 basis-48 text-center"
                groupName="Services"
                register={register('serviceType')}
                option={service}
              />
            )
          })}
        </div>
        {errors.serviceType && (
          <p className="mt-1 text-xs text-orange-700">{errors.serviceType.message}</p>
        )}
      </fieldset>

      <fieldset className="1.5xs:grid-cols-2 mt-10 grid gap-x-6 gap-y-10">
        <InputField
          value="1.2"
          placeholder="David Perez"
          label={whatIsName}
          register={register('name')}
          error={errors.name}
        />

        <InputField
          value="1.3"
          placeholder="[perezdavid@gmail.com]"
          label={whatIsEmail}
          register={register('email')}
          type="email"
          error={errors.email}
        />

        <TextAreaField
          className="1.5xs:col-span-2"
          value="1.4"
          placeholder={tellMeMore}
          label={howCanHelpYou}
          register={register('description')}
          error={errors.description}
        />
      </fieldset>

      <SubmitButton
        className={cn('mt-12 h-12 w-full text-base', isSubmitting && 'pointer-events-none')}
      >
        {isSubmitting ? (
          <Spinner size={24} />
        ) : (
          <div className="flex items-center gap-2">
            <BiMailSend className="text-xl" />
            {lang === 'es' ? 'Hablemos' : "Let's talk"}
          </div>
        )}
      </SubmitButton>
    </form>
  )
}

interface InputFieldProps {
  label: string
  register: any
  error: any
  value: string
  placeholder?: string
  type?: string
  className?: string
}

interface WrapperFieldProps {
  label: string
  error: any
  value: string
  children: React.ReactNode
  className?: string
}

const WrapperField = (props: WrapperFieldProps) => {
  const { label, error, value, children, className } = props
  return (
    <label className={cn('relative flex flex-col justify-between gap-2', className)}>
      <div className="flex items-center gap-3">
        <Item value={value} />
        <span className="text-sm leading-tight">{label}</span>
      </div>
      {children}
      {error && <p className="absolute top-full mt-1 text-xs text-orange-700">{error.message}</p>}
    </label>
  )
}

const clNameInputField =
  'flex w-full border-b border-b-grey py-3 focus:border-b-dark text-base leading-snug hover:border-b-dark'
const clNameInputError = 'border-b-orange-700 focus:border-b-orange-700 hover:border-b-orange-700'

const InputField = (props: InputFieldProps) => {
  const { label, register, error, value, placeholder, type, className } = props
  return (
    <WrapperField label={label} error={error} value={value} className={className}>
      <input
        placeholder={placeholder}
        className={cn(clNameInputField, error && clNameInputError)}
        type={type || 'text'}
        {...register}
        autoComplete="off"
      />
    </WrapperField>
  )
}

const TextAreaField = (props: InputFieldProps) => {
  const { label, register, error, value, placeholder, className } = props
  return (
    <WrapperField label={label} error={error} value={value} className={className}>
      <textarea
        placeholder={placeholder}
        className={cn(
          '1.5xs:min-h-min max-h-24 min-h-20',
          clNameInputField,
          error && clNameInputError,
        )}
        {...register}
        autoComplete="off"
        rows={1}
        maxLength={100}
      />
    </WrapperField>
  )
}
