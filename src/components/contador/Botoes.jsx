import React from 'react'

export default function Botoes(props){
    return(
        <div>
            <button onClick={props.setDecrementar} > - </button>
            <button onClick={props.setIncrementar} > + </button>
        </div>
    )
}