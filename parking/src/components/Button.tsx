import { MouseEventHandler, ReactNode } from "react"

interface ButtonProps {
    children: ReactNode,
    handleClick: MouseEventHandler<HTMLButtonElement>
}

export default function Button({ children, handleClick }: ButtonProps) {
    return (
        <div className="pt-3">
            <button
                onClick= {handleClick}
                className="button is-success is-medium is-fullwidth"
            >{children}</button>
        </div>
    )
}