import { z } from 'zod';

export const contactFormSchema = z.object({
  serviceType: z.enum(['freelance', 'laboral'], {
    message: '¿Podrías seleccionar el tipo de servicio que buscas?',
  }),
  name: z
    .string()
    .trim()
    .min(3, 'Me encantaría saber tu nombre 🙌')
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, '¿Tu nombre contiene números? Creo que algo no cuadra 🤔'),
  email: z
    .string()
    .trim()
    .email('¿Me compartes un correo válido para responderte? ✉️'),
  description: z
    .string()
    .trim()
    .min(15, 'Cuéntame un poco más para poder ayudarte mejor 💬'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
