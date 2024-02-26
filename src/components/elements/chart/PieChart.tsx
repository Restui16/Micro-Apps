import React from 'react'



const PieChart: React.FC = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-7'>
            <h1 className='text-4xl font-black'>Hasil :</h1>
            <div className='bg-blue-400 w-80 h-80 rounded-full flex items-center justify-center'>
                percentage
            </div>
        </div>
    )
}

export default PieChart
