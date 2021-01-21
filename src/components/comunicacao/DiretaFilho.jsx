import React from 'react'

export default function DiretaFilho(props){

    const { nome, idade, nerd } = props

    return(
        <div>
            <span>{nome} </span>
            <span><strong>{idade}</strong> </span>
            <span>{nerd ? 'Verdadeiro' : 'Falso'}!</span> 
        </div>

    )
}