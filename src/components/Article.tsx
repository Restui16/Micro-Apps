import React from "react"
import ArticleProps from "../InterfacesArticle"

const Article: React.FC<ArticleProps & { isfirst: boolean }> = ({ title, timestamp, author, image, isfirst }) => {
    return (
        <div className="h-96">
            <div className={isfirst ? 'h-full w-full absolute -z-10' : 'h-2/4'}>
                <img src={image} className="w-full h-full bg-cover bg-center" alt="" />
            </div>

            <div className={isfirst ? 'h-full p-4 flex items-end text-white' : 'h-2/4 p-4 z-20'}>
                <div>
                    <span className="bg-[#FF0000] text-white p-2 mb-3 rounded-lg text-2xl">{timestamp}</span>
                    <p className="font-bold mt-4 text-4xl">{title}</p>
                    <p className="mt-1 text-2xl">{author}</p>
                </div>
            </div>
        </div>
    )
}

export default Article