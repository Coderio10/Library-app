import React from 'react';
import Heroimg from "./assets/2.jpg";
import "./css/index.css"


export default function HeroSection() {
    return (
        <section className="hero">
            <img src={Heroimg}  alt="Logo" className='hero-img'  /> 
            <h1 className='hero-header'>Online Experience</h1>   
            <p className='hero-text'>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
        </section>
    )
} 