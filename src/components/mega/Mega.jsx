import React, { useState } from 'react'

import './Mega.css'

export default function Mega(props){

    function gerarNumeroNaoContido(min, max, array){
        const aleatorio = parseInt(Math.random() * ( max + 1 - min )) + min
        return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio
    }
    
    
    function gerarNumeros(qtde){
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                return [ ...nums, novoNumero ]
            }, [])
            .sort((n1, n2) => n1 - n2 )

        return numeros
    }

    const [ qtde, setQtde ] = useState(props.qtde || 6)
    const numerosIniciais = gerarNumeros(qtde)
    const [ numeros, setNumeros ] = useState(numerosIniciais)

    return( 
        <div className="Mega">
            <h2>Mega</h2>
            <p>{numeros.join(' ')} </p>
            <div>
                <label htmlFor="">Quantidade de números: </label>
                <input 
                    min={6}
                    max={12}
                    type="number" 
                    value={qtde} 
                    onChange={evento => setQtde(+evento.target.value)} 
                />
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>Gerar números</button>
        </div>
    )
}