import React from 'react'

export default function IndiretaFilho(props){

    const gerarIdade = () => parseInt(Math.random() * (20) ) + 50
    const gerarNerd = () => Math.random() > 0.5 ? true : false

    function enviarInformacoes(){
        props.quandoClicar('Paulo', gerarIdade(), gerarNerd())
    }

    return(
        <div>
            <div>Filho</div>
            <button onClick={enviarInformacoes}>Fornecer Informações</button>
        </div>
    )
} 