import React from "react";
import './style.scss';

interface Props{
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
    texto?: string
}

function Button({onClick, type, texto}: Props){
    return(
        <button onClick={onClick} type={type} className="botao">
            {texto}
        </button>
    )  
}

export default Button;