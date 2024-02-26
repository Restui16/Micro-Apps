import React from "react";

interface Props {
    children: React.ReactNode
}

const NavList: React.FC<Props> = ({children}) => {
    return (
        <div className="flex items-center justify-end gap-5 grow">
            {children}
        </div>
    )
}

export default NavList