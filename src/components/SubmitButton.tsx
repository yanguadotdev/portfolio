import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
  className?: string
  children: React.ReactNode
}

export default function SubmitButton({ className, children }: Props) {
  return (
    <button
      type="submit"
      className={cn(
        'filter-[url(#rounded-corners)] group relative inline-block text-nowrap text-center leading-snug',
        className,
      )}
    >
      <div className="clip-path-button-link bg-primary h-full text-white">
        <div className="clip-path-button-link group-hover:bg-lightgrey bg-primary group-hover:text-primary relative flex h-full items-center justify-center p-[0.6rem_1.5rem] uppercase transition-colors duration-300">
          {children}
        </div>
      </div>
    </button>
  )
}
