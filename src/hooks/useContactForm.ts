import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { contactFormSchema, type ContactFormData } from '@/schemas/contact';

export function useContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
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
