import React from 'react'

interface Props {
    variant: string
    onClick?: () => void
    children: React.ReactNode
}

const Button: React.FC<Props> = ({ variant, onClick, children }) => {
    return (
        <button className={`${variant} font-bold px-4 py-1 rounded-lg text-2xl`}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
