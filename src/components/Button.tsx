import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

const buttonWrapper = cva('clip-path-button-link whitespace-nowrap text-sm h-full', {
    variants: {
        variant: {
            primary: 'bg-primary text-dark',
            outline: 'bg-primary text-primary',
        },
    },
})

const buttonText = cva(
    'clip-path-button-link p-[0.6rem_1.5rem] relative h-full uppercase transition-colors duration-300 flex items-center justify-center',
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
    preventSamePathNavigation?: boolean
}


export default function Button(props: ButtonProps) {
    const { href, variant = 'primary', download, type, children, className, preventSamePathNavigation } = props

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (
            preventSamePathNavigation &&
            typeof window !== 'undefined' &&
            window.location.pathname === href
        ) {
            e.preventDefault()
        }
    }

    return (
        <>
            {
                href ? (
                    <a
                        href={href}
                        download={download}
                        className={cn("filter-[url(#rounded-corners)] group relative inline-block text-center leading-snug", className)}
                        onClick={handleClick}
                    >
                        <div className={buttonWrapper({ variant })}>
                            <div data-scramble-text className={buttonText({ variant })}>
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
                            <div {...(type !== 'submit' && { 'data-scramble-text': true })} className={buttonText({ variant })}>
                                {children}
                            </div>
                        </div>
                    </button>
                )
            }
        </>
    )
}