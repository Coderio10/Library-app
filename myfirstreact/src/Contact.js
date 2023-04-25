import React from 'react';
import "./css/index.css"


export default function ContactSection(props) {
    return (
        <section className="contact-sec">
            <div className='contact-card'>
                <img src={props.img} />
                <div className="details">
                    <h3>{props.name}</h3>
                    <span>
                        <p>{props.phone}</p>
                        <p>{props.email}</p>
                    </span>
                </div>
            </div>
        </section>
    )
} 