import React from 'react'
import UserLayouts from '../components/layouts/UserLayouts'
import SectionArticle from '../components/elements/section/SectionArticle'
import SectionWelcome from '../components/elements/section/SectionWelcome'
import imgBrand from '../assets/images/brand.png'
import imgContent from '../assets/images/kotak-suara.png'
import SectionInfo from '../components/elements/section/SectionInfo'
const Home: React.FC = () => {
    
    return (
        <>
            <UserLayouts>
                <SectionWelcome imgBrand={imgBrand} imgContent={imgContent}/>
                <SectionArticle />
                <SectionInfo />
            </UserLayouts>
        </>
    )
}

export default Home
