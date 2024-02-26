import React from "react";

interface Props {
    children: React.ReactNode
}

const Footer: React.FC<Props> = ({children}) => {
    return (
        <footer className="bg-black">
            {children}
        </footer>
    )
}

export default Footer