import React from "react";
import brandLogo from "../assets/images/brand-logo.png"
import { ButtonLogin } from "./ButtonLogin";
export const Navbar: React.FC = () => {
    return (
        <nav className="bg-black text-white p-3">
            <div className="container mx-auto px-12 flex justify-between items-center ">
                <div className="flex items-center gap-2">
                    <div className="h-9" >
                        <img className="h-full" src={brandLogo} alt="img-logo" />
                    </div>
                    <p>PEMILU PRESIDEN DUMBWAYS.ID</p>
                </div>

                <div className="flex items-center gap-10">
                    <div className="flex gap-6">
                        <a href="">Partai</a>
                        |
                        <a href="">Paslon</a>
                        |
                        <a href="">Voting</a>
                    </div>

                    <ButtonLogin />
                </div>
            </div>

        </nav>
    )
}