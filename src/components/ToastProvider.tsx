import { Toaster } from 'sonner';

export default function ToasterProvider() {
    return (
        <Toaster
            position="top-center"
            richColors
            toastOptions={{
                className: 'text-md bg-white border font-inherit font-primary',
                duration: 2500,
            }}
        />
    );
}
