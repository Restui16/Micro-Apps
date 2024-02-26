import React from 'react'

interface Props {
    children: React.ReactNode
}

const Thead: React.FC<Props> = ({children}) => {
    return (
        <thead className='bg-[#E5E5E5] text-left'>
            {children}
        </thead>
    )
}

export default Thead
