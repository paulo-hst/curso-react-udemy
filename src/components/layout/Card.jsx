import React from 'react'
import './Card.css'

export default function Card(props){

    const cardStyle = {
        backgroundColor: props.color || '#000',
        borderColor: props.color || '#0F0',
    }
    
    return(
        <div className="Card" style={cardStyle}>
            <div className="Title">
                {props.titulo}
            </div> 
            <div className="Content">
                {props.children}
            </div>            
        </div>
    )
}