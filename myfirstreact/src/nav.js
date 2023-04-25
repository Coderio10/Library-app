import React from 'react';
import Navlogo from "./assets/logo.svg";
import "./css/index.css"

export default function NavBar() {
    return (
        <nav>
            <img src={Navlogo}  alt="Logo" /> React App   
        </nav>
    )
} 
