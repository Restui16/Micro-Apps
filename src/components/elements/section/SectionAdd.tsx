import React from 'react'

interface Props {
    children: React.ReactNode
    title: string
    profilePic: string
}

const SectionAdd: React.FC<Props> = ({children, title, profilePic}) => {
    return (
        <section className="bg-white p-10">
        <h1 className='text-center text-[#5E5400] text-5xl font-black uppercase mb-10'>{title}</h1>
        <div className="container mx-auto px-12">
            <div className="flex justify-center gap-7 px-20 ">
                <div className="w-[368px] h-[523px]">
                    <img src={profilePic} className="rounded-lg bg-cover bg-center w-full h-full" alt="" />
                </div>
                <form action="" className=" grow">
                    {children}
                </form>
            </div>
        </div>
    </section>
    )
}

export default SectionAdd
