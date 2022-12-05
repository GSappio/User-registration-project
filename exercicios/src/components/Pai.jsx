import React from "react";
import { childreWithProps } from "./utils/utils";

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {childreWithProps(props)}
        </ul>
    </div>

    