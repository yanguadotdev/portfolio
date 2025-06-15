import { z } from 'zod';

export const contactFormSchema = z.object({
    serviceType: z.enum(['freelance', 'laboral'], {
        message: 'Selecciona un tipo de servicio',
    }),
    name: z
        .string()
        .trim()
        .min(3, 'Nombre requerido')
        .regex(/^[a-zA-ZÀ-ÿ\s]+$/, 'El nombre solo debe contener letras'),
    email: z
        .string()
        .trim()
        .email('Correo inválido'),
    description: z
        .string()
        .trim()
        .min(15, 'Describe con un mínimo de 15 caracteres'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
