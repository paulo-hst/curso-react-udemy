import React, { cloneElement } from 'react'

export default function Familia(props){
    return(
        <div>
            {
                props.children.map( (element, i) => {
                    return cloneElement(element, {...props, key: i})
                })
            }
        </div>        
    )
}