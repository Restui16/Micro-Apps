import React, { useState } from "react";
import PieChart from "../chart/PieChart";


const SectionInfoPemilu: React.FC = () => {
    const [isVoting, setIsVoting] = useState<boolean>(false)

    const handleBtnIsVoting = (): void => {
        setIsVoting(!isVoting)
    }

    return (
        <section className='bg-white'>
            <div className="container mx-auto px-12 py-10">
                <h1 className='text-[#5E5400] text-center font-black text-5xl'>INFO PEMILU TERUPDATE</h1>
                <div className='flex gap-16 justify-center mt-10'>
                    <PieChart />

                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-5 items-center bg-[#FF6384] p-4 rounded-lg shadow-xl shadow-[#CC5B5B80] border-b-4 border-[#CC5B5B80]'>
                            <div className='w-20 h-28 p-2 text-center text-white bg-[#5E0000] rounded-lg flex flex-col justify-center'>
                                <h1 className='text-base font-bold'>No. Paslon</h1>
                                <h1 className='text-3xl font-bold'>3</h1>
                            </div>
                            <div className=''>
                                <h1 className='text-4xl font-black text-[#5E0000]'>Cintara Surya Paloh</h1>
                                <p className='text-3xl font-bold text-[#5E0000]'>75%</p>
                            </div>
                        </div>

                        <div className='flex gap-5 items-center bg-[#FFCD56] p-4 rounded-lg shadow-xl shadow-[#CACC5B80]'>
                            <div className='w-20 h-28 p-2 text-center text-white bg-[#5E5400] rounded-lg flex flex-col justify-center'>
                                <h1 className='text-base font-bold'>No. Paslon</h1>
                                <h1 className='text-3xl font-bold'>3</h1>
                            </div>
                            <div className=''>
                                <h1 className='text-4xl font-black text-[#5E5400]'>Cintara Surya Paloh</h1>
                                <p className='text-3xl font-bold text-[#5E5400]'>75%</p>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center bg-[#36A2EB] p-4 rounded-lg shadow-xl shadow-[#5BCCBE80]'>
                            <div className='w-20 h-28 p-2 text-center text-white bg-[#005E4D] rounded-lg flex flex-col justify-center'>
                                <h1 className='text-base font-bold'>No. Paslon</h1>
                                <h1 className='text-3xl font-bold'>3</h1>
                            </div>
                            <div className=''>
                                <h1 className='text-4xl font-black text-[#005E4D]'>Cintara Surya Paloh</h1>
                                <p className='text-3xl font-bold text-[#005E4D]'>75%</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center items-center mt-10'>
                    <button className={`${isVoting ? 'text-[#FF0000] text-3xl' : 'rounded-lg text-3xl bg-[#5E5400] px-12 mt-16 py-2 font-bold text-white'} `} onClick={handleBtnIsVoting}>{isVoting ? 'ANDA SUDAH MEMILIH!!!' : 'Masukan Suaramu'}</button>
                </div>
            </div>
        </section>
    )
}

export default SectionInfoPemilu