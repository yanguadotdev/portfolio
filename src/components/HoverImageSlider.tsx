import { cn } from '@/lib/utils'
import { useState, useEffect, useRef } from 'react'

interface HoverImageSliderProps {
  images: string[]
  interval?: number
  className?: string
}

export default function HoverImageSlider({
  images,
  interval = 1000,
  className = '',
}: HoverImageSliderProps) {
  const [index, setIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isHovering) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length)
      }, interval)
    } else {
      clearInterval(intervalRef.current!)
    }

    return () => {
      clearInterval(intervalRef.current!)
    }
  }, [isHovering, images.length, interval])

  return (
    <div
      className={cn('relative aspect-square size-full cursor-pointer overflow-hidden', className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`image-${i}`}
          className={`absolute inset-0 size-full object-cover transition-all duration-700 ease-in-out ${i === index ? 'z-10 scale-100 opacity-100' : 'z-0 scale-95 opacity-0'} `}
        />
      ))}
    </div>
  )
}
