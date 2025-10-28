import confetti from 'canvas-confetti'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { contactFormSchema, type ContactFormData } from '@/schemas/contact'
import { translations } from '@/i18n/translations'
import type { Lang } from '@/types'

export function useContactForm(lang: Lang) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema(lang)),
  })

  const { success, error } = translations[lang].contact.messages

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Error al enviar el mensaje')
      toast.success(success)
      reset()
      confetti({
        particleCount: 150,
        spread: 85,
        colors: ['#ff7120', '#05df72', '#F2E30A'],
        origin: { y: 0.6 },
      })
    } catch (err) {
      toast.error(error)
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isSubmitting,
  }
}
