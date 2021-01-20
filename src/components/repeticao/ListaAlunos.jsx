import React from 'react'
import alunos from '../../data/alunos'

export default function ListaAlunos(props){
    // console.log(alunos[0].nome)

    // SEM .map: const li1 = <li>{alunos[0].id} - {alunos[0].nome} - {alunos[0].nota}</li>

    const listItem = alunos.map( aluno => {
        return <li key={aluno.id}>{aluno.id}) {aluno.nome} - {aluno.nota}</li>        
    } )

    return(
        <div>
            <ul style={{ 'listStyle': 'none' }}>
                {listItem}
            </ul>
        </div>
    )
}