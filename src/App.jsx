import React from 'react'

import './App.css'

import Mega from './components/mega/Mega'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import ListaProdutos from './components/repeticao/ListaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Familia from './components/basicos/Familia'
import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'


// eslint-disable-next-line import/no-anonymous-default-export
export default _ => { 
    return (
        <div className="App">
            <h1>Fundamentos React!</h1>

            <div className="Cards">

                <Card titulo="#14 - Desafio - Mega-Sena" color="#0f7088">
                    <Mega qtde={8} ></Mega>
                </Card>

                <Card titulo="#13 - Componente baseado em classe" color="#0f7088">
                    <Contador numeroInicial={10} />
                </Card>

                <Card titulo="#12 - Componente Controlado (Input)" color="#0f0000">
                    <Input />
                </Card>

                <Card titulo="#11 - Comunicação Indireta" color="#0fff77">
                    <IndiretaPai />
                </Card>

                <Card titulo="#10 - Comunicação Direta" color="#260777">
                    <DiretaPai />
                </Card>

                <Card titulo="#09 - Renderização Condicional" color="#266777">
                    <UsuarioInfo usuario={{ nome: 'Paulo' }}/>
                    <UsuarioInfo usuario={{ email: 'paulo@gmail.com' }}/>
                    <UsuarioInfo usuario={{ nome: 'Henrique' }}/>
                    <UsuarioInfo />
                </Card>

                <Card titulo="#08 - Renderização Condicional" color="#966777">
                    <ParOuImpar numero={(Math.random()*100).toFixed(0)}></ParOuImpar>
                </Card>

                <Card titulo="#07 - Desafio - Lista de produtos" color="#966633">
                    <ListaProdutos></ListaProdutos>
                </Card>

                <Card titulo="#06 - Lista de Alunos" color="#000">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#05 - Componente com filhos" color="#006900">
                    <Familia sobrenome="Teixeira">
                        <FamiliaMembro nome="Paulo" />
                        <FamiliaMembro nome="Henrique"/>
                        <FamiliaMembro nome="Silva"/>
                    </Familia>
                </Card>

                <Card titulo="#04 - Desafio - Número Aleatorio" color="#FA6900">
                    <Aleatorio min={10} max={50} />
                </Card>

                <Card titulo="#03 - Fragmento" color="#002041">
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Componente Com Parametro" color="#FA0000">  
                    <ComParametro 
                        titulo="Situação do aluno:" 
                        aluno="Paulo"
                        nota={5.9}
                    />
                    <ComParametro 
                        titulo="Situação do aluno:" 
                        aluno="Henrique"
                        nota={10}
                    />
                </Card>

                <Card titulo="#01 - Primeiro Componente" color="#006990">
                    <Primeiro></Primeiro>
                </Card>
            </div>
            
        </div>
    )
}