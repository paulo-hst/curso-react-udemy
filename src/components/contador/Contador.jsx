import React, { Component } from 'react'
import './Contador.css'

import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

class Contador extends Component{
    /* Estado com Constructor
    constructor(props){

        super(props)

        this.state = {
            numero: props.numeroInicial
        
    } */

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passo || 5
    }

    incrementar = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    decrementar = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }

    render(){
        return(
            <div className="Contador">
                <h3>Contador</h3>
                <div>
                    <Display numero={this.state.numero}/>
                    <PassoForm passo={this.state.passo} setPasso={this.setPasso} /> 
                    <Botoes setIncrementar={this.incrementar}  setDecrementar={this.decrementar} />
                </div>
            </div>
        )
    }
}

export default Contador