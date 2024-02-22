import React, { useState } from "react";

export const ButtonLogin: React.FC = () =>{

    const [isLogin, setIsLogin] = useState<boolean>(true)

    const handleLogin = () :void =>  {
        setIsLogin(!isLogin)
    }

    let btnLogin;
    if(isLogin === false){
        btnLogin = <button className="bg-gray-50 text-black px-4 py-1 rounded" onClick={handleLogin}>Login</button>
    } else {
        btnLogin = <button className="bg-gray-50 h-9 w-9 text-black rounded-full" onClick={handleLogin}>D</button>
    }

    return (
        (btnLogin)
    )
}