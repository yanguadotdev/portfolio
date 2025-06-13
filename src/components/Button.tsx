import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

const buttonWrapper = cva('clip-path-button-link whitespace-nowrap text-sm', {
    variants: {
        variant: {
            primary: 'bg-primary text-dark',
            outline: 'bg-primary text-primary',
        },
    },
})

const buttonText = cva(
    'clip-path-button-link p-[0.6rem_1.5rem] relative uppercase transition-colors duration-300',
    {
        variants: {
            variant: {
                primary: 'group-hover:bg-lightgrey bg-primary',
                outline: 'group-hover:bg-primary bg-lightgrey group-hover:text-dark',
            },
        },
    },
)

interface ButtonProps {
    href?: string
    variant?: 'primary' | 'outline'
    download?: boolean
    type?: 'button' | 'submit' | 'reset'
    children: React.ReactNode
    className?: string
}


export default function Button(props: ButtonProps) {
    const { href, variant = 'primary', download, type, children, className } = props

    return (
        <>
            {
                href ? (
                    <a
                        href={href}
                        download={download}
                        className={cn("filter-[url(#rounded-corners)] group relative inline-block text-center leading-snug", className)}
                    >
                        <div className={buttonWrapper({ variant })}>
                            <div scramble-text={'true'} className={buttonText({ variant })}>
                                {children}
                            </div>
                        </div>
                    </a>
                ) : (
                    <button
                        type={type}
                        className={cn("filter-[url(#rounded-corners)] group relative inline-block text-center leading-snug", className)}
                    >
                        <div className={buttonWrapper({ variant })}>
                            <div scramble-text={'true'} className={buttonText({ variant })}>
                                {children}
                            </div>
                        </div>
                    </button>
                )
            }
        </>
    )
}