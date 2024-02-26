import React from 'react'

interface Props {
    children: React.ReactNode
}

const Tbody: React.FC<Props> = ({children}) => {
    return (
        <tbody className='bg-white'>
            {children}
        </tbody>
    )
}
export default Tbody
