import React from "react";

// props poderia ser alterado por qualquer outro nome mas
// segue um padrão porque props seria as propriedades passadas.

export default props => [
<h1 key='h1'>Bom dia! {props.nome}!</h1>,
<h2 key='h2'>Até nuuunca!</h2>
]

// export default props => 
// <React.Fragment>
// <h1>Bom dia! {props.nome}!</h1>
// <h2>Até breve!</h2>
// </React.Fragment>

// export default props => 
// <div>
// <h1>Bom dia! {props.nome}!</h1>
// <h2>Até breve!</h2>
// </div>