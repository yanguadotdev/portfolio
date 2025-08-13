type ItemProps = {
  value: string
}

export default function Item({ value }: ItemProps) {
  return (
    <div className="border-grey flex h-6 w-9 items-center justify-center border">
      <span className="text-dark-60 text-xs">{value}</span>
    </div>
  )
}
