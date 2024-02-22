import React from "react";
import brandLogo from "../assets/images/brand-logo.png"

export const Footer: React.FC = () => {
    return (
        <footer className="bg-black h-60">
            <div className="flex flex-col h-60">
                <div className="container mx-auto px-12 grow flex">
                    <div className="flex items-center  gap-10">
                        <img src={brandLogo} className="h-36" alt="logobrand" />

                        <div className="basis-72">
                            <h1 className="font-bold text-lg text-white">DUMBWAYS.ID</h1>
                            <p className="text-neutral-500">Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413</p>
                        </div>
                    </div>
                </div>
                <div className="border-t-2 border-white basis-12 flex justify-center items-center">
                    <h1 className="text-center text-white">Komisi Pemilihan Umum DumbWays.ID | Restu Wibowo 2024</h1>
                </div>
            </div>
        </footer>
    )
}