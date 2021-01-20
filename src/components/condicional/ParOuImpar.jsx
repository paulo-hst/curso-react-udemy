import React from 'react'

export default function ParOuImpar(props){

    /* const { numero } = props

    function isPar(){
        return numero % 2 === 0
    } */

    const isPar = props.numero % 2 === 0

    return(
        <div>
            { isPar ? 
                    <span> {props.numero} é Par </span> : 
                    <span> {props.numero} é Ímpar </span> 
            }
        </div>
    )
}