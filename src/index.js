import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Situação do aluno:" 
            aluno="Paulo"
            nota={5}
        />
        <ComParametro 
            titulo="Situação do aluno:" 
            aluno="Henrique"
            nota={10}
        />
    </div>,
    document.getElementById('root')
)