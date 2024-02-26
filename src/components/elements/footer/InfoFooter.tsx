import React from "react";

interface Props {
    imgBrand: string
}

const InfoFooter: React.FC<Props> = ({ imgBrand }) => {
    return (
        <div className="container mx-auto px-12 flex">
            <div className="flex items-center py-10 gap-10">
                <img src={imgBrand} className="h-36" alt="logobrand" />

                <div className="basis-72">
                    <h1 className="font-bold text-lg text-white">DUMBWAYS.ID</h1>
                    <p className="text-neutral-500">Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413</p>
                </div>
            </div>
        </div>
    )
}

export default InfoFooter