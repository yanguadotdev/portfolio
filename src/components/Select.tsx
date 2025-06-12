import { useState, useEffect } from 'react';

interface Category {
    id: string;
    label: string;
    checked?: boolean;
}

interface SelectProps {
    categories: Category[];
    value?: string;
    onChange?: (categoryId: string) => void;
    className?: string;
    placeholder?: string;
    name?: string;
}

export default function Select({ categories, value, onChange, className, placeholder, name }: SelectProps) {
    const [selectedValue, setSelectedValue] = useState(value || categories[0]?.id || '');

    useEffect(() => {
        if (value !== undefined) {
            setSelectedValue(value);
        }
    }, [value]);

    const handleSelect = (categoryId: string) => {
        setSelectedValue(categoryId);
        if (onChange) {
            onChange(categoryId);
        }
    };

    return (
        <div className={`relative w-full ${className}`}>
            <label htmlFor="mobile-categories" className="sr-only">
                {placeholder}
            </label>
            <select
                id="mobile-categories"
                name={name}
                value={selectedValue}
                onChange={(e) => handleSelect(e.target.value)}
                className="w-full appearance-none border border-grey bg-lightgrey px-4 py-3 pr-10 text-sm text-dark transition-colors duration-300 hover:border-dark focus:border-dark focus:outline-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.75rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em'
                }}
                aria-label={placeholder}
            >
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.label}
                    </option>
                ))}
            </select>
        </div>
    );
};