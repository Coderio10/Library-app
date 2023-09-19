import React from 'react';
import "./css/index.css"

export default function CardSection(props) {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "Sold out"
    }else if (props.location === "Online") {
        badgeText = "Online"
    }

    return (
        <section className="card-sec">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.coverImg}  alt="Logo" className='card-img'  /> 
            <div className='card-stats' >
                <span>⭐ {props.stats.rating}</span>
                <span className='grey'>({props.stats.reviewCount}) *</span>
                <span className='grey'>{props.country }</span>
            </div>
            <p>{props.title} </p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </section>
    )
} 