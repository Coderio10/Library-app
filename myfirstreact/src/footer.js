import React from 'react'
import './css/footer.css'
import './css/index.css'
import logo from './images/logo-footer.svg'
import FB from './images/icon-facebook.svg'
import IG from './images/icon-instagram.svg'
import TW from './images/icon-twitter.svg'
import PT from './images/icon-pinterest.svg'

export default function Navbar() {

    return (
        <div className='footer'>
            <img src={logo} alt="Sunnyside" />
            <ol>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
            </ol>
            <div>
                <img src={FB} alt="faceebook" />
                <img src={IG} alt="instagram"/>
                <img src={TW} alt="twitter"/>
                <img src={PT} alt="pinterest"/>
            </div>
        </div>
    )
}
