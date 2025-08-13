import { cn } from '@/lib/utils'
import { useState, useRef, useEffect } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { AnimatePresence, motion } from 'motion/react'

type Item = {
  id: string
  label: string
}

interface DropdownProps {
  id: string
  defaultValue?: string
  label: string
  items: Item[]
  className?: string
  name?: string
}

export default function Dropdown({
  id,
  label,
  items,
  className,
  defaultValue,
  name,
}: DropdownProps) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(defaultValue || '')
  const [display, setDisplay] = useState(defaultValue || label)
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null)

  const dropdownRef = useRef<HTMLDivElement>(null)
  const listOptionsRef = useRef<HTMLUListElement>(null)
  const hiddenInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const isOption = listOptionsRef.current?.contains(event.target as Node)
      if (
        (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) ||
        isOption
      ) {
        setOpen(false)
        if (isOption) {
          const li = event.target as HTMLLIElement
          const newValue = li.dataset.value || ''
          setValue(newValue)
          setDisplay(li.textContent || '')

          if (hiddenInputRef.current) {
            hiddenInputRef.current.value = newValue
            hiddenInputRef.current.dispatchEvent(new Event('change', { bubbles: true }))
          }
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (!open && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      setOpen(true)
      setFocusedIndex(0)
      return
    }

    if (open) {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setFocusedIndex((prev) => (prev === null || prev === items.length - 1 ? 0 : prev + 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setFocusedIndex((prev) => (prev === null || prev === 0 ? items.length - 1 : prev - 1))
      } else if (e.key === 'Enter' && focusedIndex !== null) {
        e.preventDefault()
        const selectedItem = items[focusedIndex]
        setValue(selectedItem.id)
        setDisplay(selectedItem.label)

        if (hiddenInputRef.current) {
          hiddenInputRef.current.value = selectedItem.id
          hiddenInputRef.current.dispatchEvent(new Event('change', { bubbles: true }))
        }

        setOpen(false)
      } else if (e.key === 'Escape') {
        setOpen(false)
      }
    }
  }

  return (
    <div className={cn('max-w-3xs relative inline-block w-full', className)} ref={dropdownRef}>
      {name && <input ref={hiddenInputRef} type="hidden" name={name} value={value} />}

      <button
        type="button"
        id={id}
        onClick={() => setOpen(!open)}
        onKeyDown={handleKeyDown}
        className={cn(
          'border-grey bg-lightgrey text-dark hover:border-dark focus:border-dark peer flex w-full items-center justify-between border px-4 py-3 text-sm transition-colors duration-300',
          open && 'border-dark',
        )}
      >
        {display}
        <BiChevronDown
          width={24}
          className={cn('size-6 transition-transform duration-300', open ? 'rotate-180' : '')}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25, type: 'spring', stiffness: 150 }}
            className="bg-lightgrey border-dark absolute w-full origin-top overflow-hidden border border-t-0"
          >
            <ul ref={listOptionsRef}>
              {items.map((item, idx) => (
                <li
                  key={item.id}
                  data-value={item.id}
                  className={cn(
                    'hover:bg-darkgrey/20 cursor-pointer px-4 py-2',
                    focusedIndex === idx ? 'bg-darkgrey/30' : '',
                  )}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
