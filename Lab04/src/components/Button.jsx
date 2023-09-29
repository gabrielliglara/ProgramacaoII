import React from "react";

function Button(){
    
    const[texto, setNewtexto]= React.useState("Follow");

    function handleClick() {
        if (texto === "Follow"){
            setNewtexto("Following");
        } else if (texto === "Following"){
            setNewtexto("Follow");
        }
    }
    
    return (
        <div>
            <button id="btnFollow" onClick={handleClick}>{texto}</button>
        </div>
    );
}

export default Button;