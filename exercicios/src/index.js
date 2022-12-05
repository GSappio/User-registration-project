import React from 'react'
import ReactDOM from 'react-dom'
import Pai from './components/Pai'

ReactDOM.render(
    <div>
        <Pai nome="Pedro" sobrenome="Silva">
            {/* Como passo os componentes Filho aqui? */}
        </Pai>
    </div>
       , document.getElementById('root'))