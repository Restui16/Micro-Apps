import React from 'react'

interface Props {
    bgColor?: string
    shadowColor?: string
    textColor?: string
}

const Voting: React.FC<Props> = ({ bgColor, shadowColor, textColor }) => {
  
    return (
        <div className={`flex items-center gap-5 rounded-lg shadow-xl p-5 shadow-${shadowColor} bg-${bgColor}`}>
            <div className={`px-8 py-11 bg-${textColor} rounded-xl text-white text-center border-white border-2`}></div>
            <div className={`font-bold text-3xl`}>
                <h1 className={`text-${textColor}`}>Cintara Surya Paloh</h1>
                <p className={`text-${textColor}`}>78%</p>
            </div>
        </div>
    )
}

export default Voting
