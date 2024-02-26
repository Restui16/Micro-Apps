import React from 'react'
interface Props {
    children: React.ReactNode
}

const Table: React.FC<Props> = ({children}) => {
    return (
        <table className='w-full border-collapse  border-[#828282] mt-10'>
            {children}
        </table>

    )
}

export default Table
