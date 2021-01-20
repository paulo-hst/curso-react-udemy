import './ListaProdutos.css'

import React from 'react'
import produtos from '../../data/produtos'

export default function ListaProdutos(props){

    function getLinhas(){
        return (
            produtos.map( (produto, i) => {
                return(
                    <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>R$ {produto.preco.toFixed(2).replace('.',',')}</td>
                    </tr>
                )
            })
        )
    }


    return(
        <div className="ListaProdutos">
            <table border={1}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Nome</td>
                        <td>Preço</td>
                    </tr>
                </thead>

                <tbody>
                    { getLinhas() }
                </tbody>
            </table>
        </div>
    )
}