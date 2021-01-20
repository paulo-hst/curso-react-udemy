import React from 'react'

export default function Aleatorio(props){

    const { min, max } = props

    const valor = parseInt(Math.random() * (max - min)) + min;

    return(
        <>
            <h3>Número aleatório!</h3>
            <p>Valor mínimo: <strong>{min}</strong> / Valor máximo: <strong>{max}</strong></p>
            <p>Valor: {valor}</p>
        </>
    )   
}