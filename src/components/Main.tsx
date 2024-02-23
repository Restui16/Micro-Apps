import React  from "react";
import ArticleContent from "./ArticleContent";
import InfoContent from "./InfoContent";

export const Main: React.FC = () => {

    return (
        <main className="mt-10">
            <div className="container mx-auto px-12">
                <ArticleContent />
            </div>

            <InfoContent />
        </main>
    )
}