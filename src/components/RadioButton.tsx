import { cn } from "@/lib/utils";
import type { UseFormRegisterReturn } from "react-hook-form";

type Option = {
    id: string;
    label: string;
    checked?: boolean;
};

interface Props {
    option: Option;
    groupName: string;
    className?: string;
    register?: UseFormRegisterReturn
}

export default function RadioButton({
    option,
    groupName,
    className,
    register,
}: Props) {
    return (
        <label
            className={cn(
                "has-checked:bg-dark border-grey focus:border-dark hover:border-dark group relative cursor-pointer border p-3 transition-colors duration-300",
                className
            )}
            htmlFor={option.id}
            tabIndex={0}
        >
            <input
                tabIndex={-1}
                className="peer absolute -z-10 opacity-0"
                type="radio"
                id={option.id}
                value={option.id}
                {...(register ?? { name: groupName })}
                defaultChecked={!register && option.checked}
            />
            <span className="peer-checked:text-light group-hover:text-dark text-dark-60 text-sm transition-colors">
                {option.label}
            </span>
        </label>
    );
}
