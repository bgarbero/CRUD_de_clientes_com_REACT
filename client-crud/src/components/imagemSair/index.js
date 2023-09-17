import React from "react";
import ImagemSair from "../../assets/sair.png"
import "./index.css"

const imagemSair = () => {
    return(
        <li className="nav-item">
            <img id="exit" src={ImagemSair} />
        </li>
    )
}

export default imagemSair;