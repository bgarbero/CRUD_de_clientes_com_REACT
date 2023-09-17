import React from "react";
import minhaImagem from "../../assets/vendedor.jpg"
import "./index.css"

const MeuComponente = () => {
    return(
        <div>
            <img id="img-login" src={minhaImagem} />
        </div>
    )
}

export default MeuComponente;