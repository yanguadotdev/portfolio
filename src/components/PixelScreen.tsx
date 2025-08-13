import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

const anim = {
  closed: (delay: number[]) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.04 * delay[0] },
  }),
}

export default function PixelScreen({
  dimensions,
}: {
  dimensions: { width: number; height: number }
}) {
  const { width, height } = dimensions
  /**
   * Shuffles array in place (Fisher–Yates shuffle).
   * @param {Array} a items An array containing the items.
   */
  const shuffle = (a: number[]) => {
    var j, x, i
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1))
      x = a[i]
      a[i] = a[j]
      a[j] = x
    }
    return a
  }

  const getBlocks = (indexOfColum: number) => {
    const blockSize = height * 0.1
    const nbOfBlocks = Math.ceil(width / blockSize)
    const shuffledIndexes = shuffle([...Array(nbOfBlocks)].map((_, i) => i))
    return shuffledIndexes.map((randomIndex: number, index: number) => {
      return (
        <motion.div
          key={index}
          className={cn('bg-primary h-full w-[10vw]')}
          variants={anim}
          initial="initial"
          animate="closed"
          custom={[indexOfColum + randomIndex, 10 - indexOfColum + randomIndex]}
        />
      )
    })
  }

  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none fixed inset-0 z-[1000] flex size-full flex-col overflow-hidden',
      )}
    >
      {[...Array(10)].map((_, index) => {
        return (
          <div key={index} className={cn('flex h-[10vh] w-full')}>
            {getBlocks(index)}
          </div>
        )
      })}
    </div>
  )
}
