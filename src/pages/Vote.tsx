import React from 'react'
import UserLayouts from '../components/layouts/UserLayouts'
import SectionInfo from '../components/elements/section/SectionInfo'
import SectionInfoPemilu from '../components/elements/section/SectionInfoPemilu'
import SectionInfoPaslon from '../components/elements/section/SectionInfoPaslon'
import profilePic from '../assets/images/profile-pic.png'

const Vote:React.FC = () => {
    return (
        <UserLayouts>
            <SectionInfoPemilu />
            <SectionInfoPaslon profilePic={profilePic}/>
            <SectionInfo txtColor='text-[#FF0000]'/>
        </UserLayouts>
    )
}

export default Vote
