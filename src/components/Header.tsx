import React from "react";
import kotakSuara from "../assets/images/kotak-suara.png"
import brand from "../assets/images/brand.png"

export const Header: React.FC = () => {
    return (
        <header>
            <div className="container px-12 mx-auto">
                <div className="relative flex flex-col bg-gradient-to-r from-red-300  to-red-900 my-10 rounded-xl shadow-lg lg:flex-row">
                    <img src={brand} className="absolute w-72 top-0 left-0 opacity-50 z-0" alt="" />
                    <div className="text-white self-end font-bold px-5 py-5 basis-2/4 z-10">
                        <h1 className="text-3xl lg:text-6xl">SELAMAT DATANG</h1>
                        <h3 className="text-xl lg:text-2xl">PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR DIPILIH MELALUI SEBUAH ARTI NAMA</h3>
                    </div>
                    <div className="flex justify-center items-center grow basis-40 z-10 order-first lg:order-last ">
                        <img className="w-96" src={kotakSuara} alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}