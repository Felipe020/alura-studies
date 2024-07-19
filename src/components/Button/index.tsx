import React from "react";
import './style.scss';

class Button extends React.Component<{
    texto: string 
    type?: "button" | "submit" | "reset" | undefined
}>{
    render(): React.ReactNode {
        const{type = "button"} = this.props;
        return(
            <button type={type} className="botao">
                {this.props.texto}
            </button>
        )
    }
}

export default Button;