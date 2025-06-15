import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

const buttonWrapper = cva('clip-path-button-link whitespace-nowrap h-full', {
    variants: {
        variant: {
            primary: 'bg-primary text-white',
            outline: 'bg-primary text-primary',
            whatsapp: 'bg-green-500 hover:bg-green-600 text-white',
        },
    },
})

const buttonText = cva(
    'clip-path-button-link p-[0.6rem_1.5rem] relative h-full uppercase transition-colors duration-300 flex items-center justify-center',
    {
        variants: {
            variant: {
                primary: 'group-hover:bg-lightgrey bg-primary group-hover:text-primary',
                outline: 'group-hover:bg-primary bg-lightgrey group-hover:text-white',
                whatsapp: 'group-hover:bg-green-500 hover:bg-green-600 text-white transition-all',
            },
        },
    },
)

interface ButtonProps {
    withEffect?: boolean
    href?: string
    target?: string
    variant?: 'primary' | 'outline' | 'whatsapp'
    download?: boolean
    type?: 'button' | 'submit' | 'reset'
    children: React.ReactNode
    className?: string
    preventSamePathNavigation?: boolean
}


export default function Button(props: ButtonProps) {
    const { href, variant = 'primary', download, type, children, className, preventSamePathNavigation, target, withEffect= true } = props

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
                        target={target}
                        download={download}
                        className={cn("filter-[url(#rounded-corners)] text-sm group relative inline-block text-center leading-snug", className)}
                        onClick={handleClick}
                        rel="noopener noreferrer"
                    >
                        <ButtonWrapper variant={variant} withEffect={withEffect} children={children} />
                    </a>
                ) : (
                    <button
                        type={type}
                        className={cn("filter-[url(#rounded-corners)] group relative inline-block text-center leading-snug", className)}
                    >
                        <ButtonWrapper variant={variant} withEffect={withEffect} children={children} />
                    </button>
                )
            }
        </>
    )
}


const ButtonWrapper = ({ variant, withEffect, children }: ButtonProps) => {
    return (
        <div className={buttonWrapper({ variant })}>
            <div {...(withEffect && { 'data-scramble-text': true })} className={buttonText({ variant })}>
                {children}
            </div>
        </div>
    )
}