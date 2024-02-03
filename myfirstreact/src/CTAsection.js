import React from 'react'
import './css/Navbar.css'
import './css/index.css'

import imageTransform from './images/desktop/image-transform.jpg'
import imageTransformMobile from './images/mobile/image-transform.jpg'

import imageStandout from './images/desktop/image-stand-out.jpg'
import imageStandoutMobile from './images/mobile/image-stand-out.jpg'

export default function Navbar() {
   
    // Learn more
    const Data = [
        {
            title: 'Transform your brand',
            text: 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
            class: 'transform',
            img: imageTransform,
            Mobile: imageTransformMobile
        },
        {
            title: 'Stand out to the right audience',
            text: 'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.',
            class: 'standout',
            img: imageStandout,
            Mobile: imageStandoutMobile
        }
    ]

    const CTAs = Data.map(cta => {
        return (
            <div className={cta.class} key={cta.class}>
                <section className='text-section'>
                    <h2>{cta.title}</h2>
                    <p>{cta.text}</p>
                    <button> Learn More</button>
                    <div></div>
                </section>
                <section>
                    <img src={cta.img} alt={cta.img} className='desktop' />
                    <img src={cta.Mobile} className='mobile-img' alt={cta.img} />
                </section>
            </div>
        )
    })

    return (
        <div>
            {CTAs}
        </div>
    )
}
