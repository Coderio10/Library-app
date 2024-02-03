import React from 'react'
import './css/index.css'

import imageEmily from './images/image-emily.jpg'
import imageJennie from './images/image-jennie.jpg'
import imageThomas from './images/image-thomas.jpg'

export default function ServiceComponent() { 
  
    const Data = [
        {
            name: "Emily R.",
            job: "Marketing Director",
            img: imageEmily,
            description: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."         
        },
        {
            name: "Thomas S.",
            job: "Chief Operating Officer",
            img: imageThomas,
            description: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."         
        },
        {
            name: "Jennie F.",
            job: "Business Owner",
            img: imageJennie,
            description: "  Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"         
        }    
    ]

    const testimonials = Data.map((testimonial) => {
        return (
            <div className="testimonial"  key={testimonial.job}>
                <img src={testimonial.img} alt="testimonials" />
                <p className='text'>{testimonial.description}</p> 
                <div>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.job}</p>
                </div>   
            </div>
        )     
    })

    return (
        <div className='testimonials-section'>
            <h2>Client testimonials</h2> 
           <div className='testimonials'> 
                {testimonials}
           </div> 
        </div>
    )
}
