import React, { useState } from 'react'
import Article from "./Article";
import InterfaceArticle from "../InterfacesArticle";
import dataArticle from "../mocks/dataArticle.json"

const ArticleContent: React.FC = () => {
    const [article] = useState<InterfaceArticle[]>(dataArticle)

    return (
        <div>
            <div className="grid grid-cols-3 gap-3">
                {article.map((data, index) => {
                    return (
                        <div key={data.id} className={index === 0 ? 'col-span-2 relative -z-20 bg-white' : 'bg-white'}>
                            <Article isfirst={index === 0} timestamp={data.timestamp} title={data.title} author={data.author} image={data.image} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ArticleContent
