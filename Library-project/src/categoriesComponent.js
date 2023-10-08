import React from 'react'
import "./css/index.css"

export default function catComps(props) {
    
    return (
        <span 
            id={props.id} 
            onClick={() => props.func(props.id)} 
        >{props.text}</span>
    )
}