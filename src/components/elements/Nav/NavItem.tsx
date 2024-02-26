import React from 'react'

interface Props {
    children: React.ReactNode
}

const NavItem: React.FC<Props> = ({ children }) => {
    return (
        <a href="" className='hidden md:inline-block text-2xl hover:font-bold'>{children}</a>
    )
}

export default NavItem
