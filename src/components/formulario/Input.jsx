import React, { useState } from 'react'
import './Input.css'

export default function Input(){

    const [ valor, setValor ] = useState('Valor Inicial')

    function quandoMudar(evento){
        console.log(evento.target.value)
        setValor(evento.target.value)
    }

    return(
        <div className='Input' >
            <h2>{valor}</h2>
            <div>
                <input value={valor} onChange={quandoMudar} /> 
                <input value={valor} readOnly /> 
                <input value={undefined}  /> 
            </div>
            
        </div>
    )
}