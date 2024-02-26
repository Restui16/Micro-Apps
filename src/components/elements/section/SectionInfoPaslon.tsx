import React from "react";

interface Props {
    profilePic: string
}

const SectionInfoPaslon: React.FC<Props> = ({profilePic}) => {
    return (
        <section className='my-10'>
            <div className="container mx-auto px-12">
                <h1 className='text-[#5E5400] text-center font-black text-5xl'>INFO PASLON</h1>
                <div className='flex justify-center items-center gap-5 mt-10'>
                    <button className='rounded-full w-10 h-10 text-slate-400 hover:text-black bg-white'><i className="fa-solid fa-chevron-left"></i></button>
                    <div className='p-5 bg-white flex gap-7 rounded-lg'>
                        <div className='w-60 h-80 rounded-lg overflow-hidden'>
                            <img src={profilePic} className='w-full h-full bg-cover bg-center' alt="profile pic" />
                        </div>

                        <div className=''>
                            <h3 className='font-bold text-2xl'>Nomor Urut: 1</h3>
                            <h1 className='font-bold text-4xl text-[#5E0000]'>Cintara Surya Paloh</h1>

                            <div className='mt-5 text-2xl'>
                                <p>Visi & Misi</p>
                                <ul className='list-disc ps-5'>
                                    <li>Memindahkan Indonesia ke Isekai</li>
                                    <li>Nonton anime 3x sehari</li>
                                    <li>Melakukakan peresapan pada budaya jepang</li>
                                </ul>
                            </div>


                            <div className='mt-2 text-2xl'>
                                <p>Koalisi</p>
                                <ul className='list-disc ps-5'>
                                    <li>Partai Pesatuan Wiboo</li>
                                    <li>Partai Redbull</li>
                                    <li>Partai Black Magic</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <button className='rounded-full w-10 h-10 text-slate-400 hover:text-black bg-white'><i className="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
        </section>
    )
}

export default SectionInfoPaslon