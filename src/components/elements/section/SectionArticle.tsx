import React, { useState } from "react";
import dataArticle from "../../../mocks/dataArticle.json"

interface InterfaceArticle {
    id?: number
    timestamp: string
    title: string
    author: string
    image: string
}

const SectionArticle: React.FC = () => {
    const [article] = useState<InterfaceArticle[]>(dataArticle)
    return (
        <section>
            <div className='container mx-auto px-12 my-10'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                    {article.map((data, index) => {
                        return (
                            <div key={data.id} className={index === 0 ? 'md:col-span-2' : 'bg-white'}>
                                <div className={index === 0 ? 'relative w-full' : 'w-full'}>
                                    <div className={index === 0 ? 'h-full w-full absolute -z-10' : 'h-2/4'}>
                                        <img src={data.image} className="w-full h-full bg-cover bg-center" alt="" />
                                    </div>

                                    <div className={index === 0 ? 'h-96 flex items-end text-white' : 'h-2/4 z-20'}>
                                        <div className="p-4">
                                            <span className="bg-[#FF0000] text-white p-2 mb-3 rounded-lg text-1xl md:text-2xl">{data.timestamp}</span>
                                            <p className="font-bold mt-4 text-2xl md:text-3xl">{data.title}</p>
                                            <p className="mt-1 text-1xl md:text-2xl">{data.author}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default SectionArticle