import React from "react";

function Titulo(props){ // quem define  props é quem chama a função
    return(
        <div className="row">
                <div className="col">
                    <h1>{props.mensagem}</h1>
                </div>
            </div>
    );
}

export default Titulo;
