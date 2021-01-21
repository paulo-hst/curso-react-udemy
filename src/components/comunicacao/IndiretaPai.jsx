import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default function IndiretaPai(){

    let [ nome, setNome ] = useState('?')
    let [ idade, setIdade ] = useState(0)
    let [ nerd, setNerd ] = useState(false)

    // nome, idade, nerd
    function receberInformacoes(nome, idade, nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return(
        <div>
            <span>{nome} </span>
            <span>{idade} </span>
            <span>{nerd ? 'Verdadeiro' : 'Falso'}!</span>
            <IndiretaFilho quandoClicar={receberInformacoes} />
        </div>
    )
}