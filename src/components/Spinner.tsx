export default function Spinner({ size = 24 }: { size?: number }) {
  return (
    <div
      className="animate-spin rounded-full border-2 border-transparent border-r-white border-t-white"
      style={{ width: size, height: size }}
    />
  )
}
