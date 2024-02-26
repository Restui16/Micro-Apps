import React from "react";

interface Props {
    brandLogo : string
    brandName: string
}

const NavBrand: React.FC<Props> = ({brandLogo, brandName}) => {
    return (
        <div className="flex items-center gap-2">
            <a href='#' className="h-9 cursor-pointer">
                <img className="h-full" src={brandLogo} alt="img-logo" />
            </a>
            <p className="hidden md:inline-block font-bold text-2xl uppercase">{brandName}</p>
        </div>
    )
}

export default NavBrand