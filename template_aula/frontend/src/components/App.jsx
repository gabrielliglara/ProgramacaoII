import React from "react";
import axios from "axios";
import ButtonM from "./ButtonM";
import Titulo from "./Titulo";
import Table from "./Table";

axios.defaults.baseURL = "http://localhost:3010/";
axios.defaults.headers.common["Content-Type"] =
    "application/json;charset=utf-8";

function App() {

    const [listaClientes, setListaClientes] = React.useState([]);

    React.useEffect(() => { //useEffect deve ser sincrona
        
        const res = axios.get("/clientes");

        //res.then((response)=> {});
        // res.catch((error)=>{});
        // res.finally();

        res.then((query) => {
            setListaClientes(query.data);
            console.log(query.data);
        });
    }, []);

    

    return (
        <div className="container-lg">
            <Titulo mensagem= {"oi"}/>
            <ButtonM/>
            <Table clientes={listaClientes}/>
        </div>
    );
}

export default App;
