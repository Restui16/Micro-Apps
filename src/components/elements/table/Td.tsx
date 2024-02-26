import React from 'react'

interface Props {
    children: React.ReactNode
}

const Td:React.FC<Props> = ({children}) => {
    return (
        <td className='border border-[#828282] p-3'>{children}</td>
    )
}

export default Td
