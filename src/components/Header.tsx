import React from "react";
import kotakSuara from "../assets/images/kotak-suara.png"
import brand from "../assets/images/brand.png"

export const Header: React.FC = () => {
    return (
        <header>
            <div className="container px-12 mx-auto">
                <div className="relative flex justify-between bg-gradient-to-r from-red-300  to-red-900 my-10 rounded-xl shadow-lg" style={{ height: '30rem' }}>
                    <img src={brand} className="absolute w-72 top-0 left-0 opacity-50" alt="" />
                    <div className="text-white self-end font-bold p-10 grow basis-96">
                        <h1 className="text-6xl">SELAMAT DATANG</h1>
                        <h3 className="text-2xl">PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR DIPILIH MELALUI SEBUAH ARTI NAMA</h3>
                    </div>
                    <div className="grow basis-40">
                        <img className="" style={{ width: "30rem" }} src={kotakSuara} alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}