import React from "react";

interface Props {
    children: React.ReactNode
}

const Header: React.FC<Props> = ({children}) => {
    return (
        <header>
            {children}
        </header>
    )
}

export default Header