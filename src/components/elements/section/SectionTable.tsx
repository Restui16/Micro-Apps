import React from 'react'

interface Props {
    children: React.ReactNode
    textTitle: string
    voters?: string
    bgColor?: string
}

const SectionTable: React.FC<Props> = ({ children, textTitle, voters,bgColor }) => {
    return (
        <section className={`py-[10rem] ${bgColor}`}>
            <div className="container mx-auto px-12">
                <h1 className='text-center text-[#5E5400] text-5xl font-black uppercase'>{textTitle}</h1>
                <div className='px-16'>
                    {children}
                    <h1 className='mt-10 font-bold text-2xl'>{voters}</h1>
                </div>
                
            </div>
        </section>
    )
}

export default SectionTable
