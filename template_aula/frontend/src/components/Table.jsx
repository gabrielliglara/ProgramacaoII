import React from "react";
import { DataGrid } from '@mui/x-data-grid';

const colunas = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "nome", headerName: "Nome", width: 180 },
    { field: "email", headerName: "Email", width: 180 },
]


function Table(props){
    return <DataGrid rows={props.clientes} columns={colunas} />;
}

export default Table;