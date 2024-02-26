import React from "react";

interface Props {
    profilePic: string
}

const SectionDashboard: React.FC<Props> = ({profilePic}) => {
    return (
        <section className='bg-white'>
            <div className="container mx-auto px-12 py-20">
                <h1 className='font-black text-5xl text-[#5E5400] text-center'>Dashboard</h1>
                <div className='grid grid-cols-3 gap-3 mt-12'>
                    <div className='flex flex-col gap-3 justify-center items-center'>
                        <div className='w-[73px] h-[73px] text-center text-[#5E5400] border-4 text-[40px] font-bold border-[#5E5400] rounded-full bg-[#FFCD56]'>1</div>

                        <div className='bg-[#FFCD56] rounded-lg px-4 py-6 shadow-xl shadow-[#5D5400]'>
                            <img src={profilePic} className='bg-cover bg-center rounded-lg' alt="" />
                            <h1 className='uppercase text-[#5E5400] text-4xl mt-3'>Surya Surya Surya</h1>
                            <h1 className=' text-[#5E5400] text-2xl'>Akumulasi: 45%</h1>
                            <h1 className=' text-[#5E5400] text-2xl'>Jumlah Vote: 117 Voters</h1>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3 justify-center items-center'>
                        <div className='w-[73px] h-[73px] text-center text-[#00575D] border-4 text-[40px] font-bold border-[#00575D] rounded-full bg-[#56FFF5]'>2</div>

                        <div className='bg-[#56FFF5] rounded-lg px-4 py-6 shadow-xl shadow-[#00575D]'>
                            <img src={profilePic} className='bg-cover bg-center rounded-lg' alt="" />
                            <h1 className='uppercase text-[#00575D]  text-4xl mt-3'>Surya Surya Surya</h1>
                            <h1 className=' text-[#00575D] text-2xl'>Akumulasi: 45%</h1>
                            <h1 className=' text-[#00575D] text-2xl'>Jumlah Vote: 117 Voters</h1>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3 justify-center items-center'>
                        <div className='w-[73px] h-[73px] text-center text-[#5D0000] border-4 text-[40px] font-bold border-[#5D0000] rounded-full bg-[#FF5656]'>3</div>

                        <div className='bg-[#FF5656] rounded-lg px-4 py-6 shadow-xl shadow-[#5D0000]'>
                            <img src={profilePic} className='bg-cover bg-center rounded-lg' alt="" />
                            <h1 className='uppercase text-[#5D0000] text-4xl mt-3'>Surya Surya Surya</h1>
                            <h1 className=' text-[#5D0000] text-2xl'>Akumulasi: 45%</h1>
                            <h1 className=' text-[#5D0000] text-2xl'>Jumlah Vote: 117 Voters</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionDashboard