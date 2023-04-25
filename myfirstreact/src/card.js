import React from 'react';
import Cardimg from "./assets/3.jpg";
import "./css/index.css"

export default function CardSection(props) {
    return (
        <section className="card-sec">
            <img src={Cardimg}  alt="Logo" className='card-img'  /> 
            <div className='card-stats' >
                <span>⭐ 5.0</span>
                <span className='grey'>(6) *</span>
                <span className='grey'>USA</span>
            </div>
            <p>Life Lessons with Katle Zaferes </p>
            <p><span className='bold'>From $135</span> / person</p>
        </section>
    )
} 