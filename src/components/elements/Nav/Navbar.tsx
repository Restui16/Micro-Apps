import React, { useState } from "react";
import Button from "../Button/Button";
import brandLogo from "/brand-logo.png"
import NavBrand from "./NavBrand";
import NavList from "./NavList";


interface Props {
    children: React.ReactNode
    brandName: string
}

const Navbar: React.FC<Props> = ({children, brandName}) => {
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const handleBtnLogin = (): void => {
        setIsLogin(!isLogin)
    }
    return (
        <nav className="bg-black text-white p-3">
            <div className="container mx-auto px-12 gap-10 flex justify-between items-center ">
                <NavBrand brandLogo={brandLogo} brandName={brandName} />
                <NavList>
                    {children}
                </NavList>
                <Button variant='bg-[#D9D9D9] text-black' onClick={handleBtnLogin} >{isLogin ? "User" : "Login"}</Button>
            </div>
        </nav>
    )
}

export default Navbar