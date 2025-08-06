import type { Lang } from '@/types';
import { z } from 'zod';
import {translations} from '@/i18n/translations';

export const contactFormSchema = (lang: Lang) => {
  const t = translations[lang].contact.messages

  return z.object({
    serviceType: z.enum(['freelance', 'laboral'], {
      message: t.serviceType,
    }),
    name: z
      .string()
      .trim()
      .min(3, t.name.min)
      .regex(/^[a-zA-ZÀ-ÿ\s]+$/, t.name.regex),
    email: z
      .string()
      .trim()
      .email(t.email),
    description: z
      .string()
      .trim()
      .min(15, t.description),
  })
}

export type ContactFormData = z.infer<ReturnType<typeof contactFormSchema>>;
