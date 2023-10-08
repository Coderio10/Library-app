import React from 'react';
import Navlogo from "./assets/logo.png";
import "./css/index.css"

export default function NavBar() {
    return (
        <nav>
            <img src={Navlogo}  alt="Logo" /> 
        </nav>
    )
} 
