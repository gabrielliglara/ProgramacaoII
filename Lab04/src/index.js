import React from "react";
import ReactDOM from "react-dom/client";
import Page from "./components/Page";

const root = ReactDOM.createRoot(document.getElementById("root")); // pega elemento na agina que tem nome root
root.render(
    <React.StrictMode>
        <Page/>
    </React.StrictMode>);
