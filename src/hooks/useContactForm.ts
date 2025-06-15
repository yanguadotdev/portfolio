import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

const contactSchema = z.object({
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

export type ContactFormData = z.infer<typeof contactSchema>;

export function useContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
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
            toast.success(`¡Gracias! ${data.name}. Tu mensaje ha sido enviado con éxito.`);
            reset();
        } catch (err) {
            console.error(err);
            toast.error('Oops... no se pudo enviar tu mensaje. Intenta más tarde, por favor.');
        }
    };

    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
        isSubmitting
    };
}
