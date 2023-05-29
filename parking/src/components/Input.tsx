import { ChangeEventHandler } from "react"

interface InputProps {
    placeholder: string,
    name: string
    handleChange: ChangeEventHandler<HTMLInputElement>
}

export default function Input({ placeholder, handleChange, name }: InputProps) {
    return (
        <div className="mb-3">
            <input
                name={name}
                className="input is-rounded"
                type="text"
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )
}