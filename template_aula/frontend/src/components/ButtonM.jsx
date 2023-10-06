import React from "react";
import Button from '@mui/material/Button';

function ButtonM(props){ // quem define  props é quem chama a função
    function counterState() {
        setCountState(countState + 1);
    }

    const [countState, setCountState] = React.useState(0);
    
    return(

        <div className="row">
                <div className="col-4">
                    <p>Count com state: {countState}</p>
                    <Button variant="contained">Clique em mim</Button>

                </div>
        </div>
    
        
    );
}

export default ButtonM;