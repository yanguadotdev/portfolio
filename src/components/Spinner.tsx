export default function Spinner({ size = 24 }: { size?: number }) {
    return (
        <div
            className="animate-spin rounded-full border-2 border-transparent border-t-dark border-r-dark"
            style={{ width: size, height: size }}
        />
    );
}
