import React from "react";
import backgroundContent from "../assets/images/background-content.png"

export const Main: React.FC = () => {
    return (
        <main className="mt-10">
            <section className="container mx-auto px-12">
                <div className="flex gap-7">
                    <article className="relative grow basis-2/3 flex justify-start items-end">
                        <img src={backgroundContent} className="absolute" alt="" style={{ zIndex: '-999' }} />
                        <div className="p-5 text-white">
                            <span className="bg-[#FF0000] text-white p-2 mb-3 rounded-lg text-2xl">SENIN, 03 JAN 2023</span>
                            <h1 className="font-bold mt-4 text-4xl">KPU TETAPKAN 3 MENTOR TERBAIK</h1>
                            <p className="mt-1 text-2xl">Super Admin</p>
                        </div>
                    </article>

                    <article className="bg-white grow flex flex-col gap-2 basis-1/3">
                        <div className="">
                            <img src={backgroundContent} className="w-full object-cover" alt="" />
                        </div>
                        <div className="px-4 py-3">
                            <span className="bg-[#FF0000] text-white p-2 mb-3 rounded-lg text-2xl">SENIN, 03 JAN 2023</span>
                            <h1 className="font-bold mt-4 text-4xl">KPU TETAPKAN 3 MENTOR TERBAIK</h1>
                            <p className="mt-1 text-2xl">Super Admin</p>
                        </div>
                    </article>
                </div>

                <div className="flex gap-7 mt-7">
                    <div className="flex gap-7 grow basis-2/3">
                        <article className="bg-white grow flex flex-col gap-2 basis-1/3">
                            <div className="">
                                <img src={backgroundContent} className="w-full object-cover" alt="" />
                            </div>
                            <div className="px-4 py-3">
                                <span className="bg-[#FF0000] text-white p-2 mb-3 rounded-lg text-2xl">SENIN, 03 JAN 2023</span>
                                <h1 className="font-bold mt-4 text-4xl">KPU TETAPKAN 3 MENTOR TERBAIK</h1>
                                <p className="mt-1 text-2xl">Super Admin</p>
                            </div>
                        </article>
                        <article className="bg-white grow flex flex-col gap-2 basis-1/3">
                            <div className="">
                                <img src={backgroundContent} className="w-full object-cover" alt="" />
                            </div>
                            <div className="px-4 py-3">
                                <span className="bg-[#FF0000] text-white p-2 mb-3 rounded-lg text-2xl">SENIN, 03 JAN 2023</span>
                                <h1 className="font-bold mt-4 text-4xl">KPU TETAPKAN 3 MENTOR TERBAIK</h1>
                                <p className="mt-1 text-2xl">Super Admin</p>
                            </div>
                        </article>
                    </div>

                    <div className="bg-white grow flex flex-col gap-2 basis-1/3">
                        <div className="">
                            <img src={backgroundContent} className="w-full object-cover" alt="" />
                        </div>
                        <div className="px-4 py-3">
                            <span className="bg-[#FF0000] text-white p-2 mb-3 rounded-lg text-2xl">SENIN, 03 JAN 2023</span>
                            <h1 className="font-bold mt-4 text-4xl">KPU TETAPKAN 3 MENTOR TERBAIK</h1>
                            <p className="mt-1 text-2xl">Super Admin</p>
                        </div>
                    </div>
                </div>


            </section>

            <section className="h-96 bg-white mt-10">
                <div className="container mx-auto px-12 flex justify-center items-center h-full">
                    <h1 className="text-4xl font-bold text-center">PILIHLAH CALON PRESIDEN MENTOR DARI REKAM JEJAK YANG JELAS PASTIKAN MEREKA TIDAK MEMILIKI VISI MISI UNTUK MELEGALKAN SLOT</h1>
                </div>
            </section>
        </main>
    )
}