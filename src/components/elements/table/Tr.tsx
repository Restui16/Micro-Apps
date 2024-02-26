import React from 'react'

interface Props {
    children: React.ReactNode
}

const Tr: React.FC<Props> = ({ children }) => {
    return (
        <tr>
            {children}
        </tr>
    )
}

export default Tr
