import React from 'react'
import './css/index.css'


export default function ServiceComponent() {

    const Data = [
        {
            title: "Graphic design",
            class: "graphic-design",
            description: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."         
        },
        {
            title: "Photography",
            class: "photography",
            description: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
        }
    ]

    const serviceComp = Data.map((data) => {
        return (
            <div className={data.class} key={data.title}>
                <div>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                </div>
            </div>
        )     
    })

    return (
        <div className='service-section'>
           {serviceComp}
        </div>
    )
}
