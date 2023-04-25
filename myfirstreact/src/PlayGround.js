import React from 'react';
import "./css/index.css";


export default function HeroSection() {
    const firstname = 'joe'
    const lastName  = 'scholes'
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if(hours < 12) {
        timeOfDay = "Morning"
    } else if(hours >= 12 && hours < 17) {
        timeOfDay = "Afternoon"
    } else {
        timeOfDay = "Night"
    }

    return (
        <section className="hero"> 
            <p> Hello {firstname} {lastName}!</p>
            <p>It is currently about {hours} <sup>o'</sup>!</p>
            <p> Good {timeOfDay}</p>
        </section>
    )
} 