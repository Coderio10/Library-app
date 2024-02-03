import React from 'react'
import './css/Navbar.css'
import './css/index.css'
import arrow from './images/icon-arrow-down.svg'

export default function Navbar() {

    return (
        <div className='Hero'>
            <div>
                <h1>We are creative</h1>
                <img src={arrow} alt="arrow" />
            </div>
        </div>
    )
}
