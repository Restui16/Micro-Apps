import React from "react";

interface Props {
    children: React.ReactNode
    htmlFor: string
}

const Label: React.FC<Props> = ({children, htmlFor}) =>{
    return (
        <label htmlFor={htmlFor} className="block text-2xl font-bold">{children}</label>
    )
}

export default Label