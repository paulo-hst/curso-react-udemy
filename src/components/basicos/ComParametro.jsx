import React from 'react'

export default function ComParametro(props){

    const { titulo, aluno, nota } = props

    const status = nota >= 7 ? "Aprovado" : "Reprovado"

    return(
        <div>
            <h3>{ titulo } { status }</h3>
            <p><em>{ aluno }</em> recebeu a nota <strong>{ nota }</strong></p>
        </div>
    )
}