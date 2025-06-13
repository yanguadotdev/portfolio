import { cn } from "@/lib/utils"

type Option = {
    id: string
    label: string
    checked?: boolean
}

interface Props {
    option: Option
    groupName: string
    className?: string
}

export default function RadioButton({ option, groupName, className }: Props) {
    return (
        <label
            className={cn("has-checked:bg-dark border-grey focus:border-dark hover:border-dark group relative cursor-pointer border p-3 transition-colors duration-300", className)}
            htmlFor={option.id}
            tabIndex={0}
        >
            <input
                tabIndex={-1}
                className="peer absolute -z-10 opacity-0"
                type="radio"
                name={groupName}
                id={option.id}
                data-name={groupName}
                value={option.id}
                defaultChecked={option.checked}
            />
            <span className="peer-checked:text-light group-hover:text-dark text-dark-60 text-sm transition-colors">
                {option.label}
            </span>
        </label>
    )
}
