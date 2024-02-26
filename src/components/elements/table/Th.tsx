import React from 'react'

interface Props {
    children: React.ReactNode
}

const Th:React.FC<Props> = ({children}) => {
    return (
        <th className='border border-[#828282] py-3 ps-3'>{children}</th>
    )
}

export default Th
