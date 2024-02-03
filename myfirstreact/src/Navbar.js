import React from 'react'
import './css/Navbar.css'
import logo from './images/logo.svg'
import hamburger from './images/icon-hamburger.svg'

export default function Navbar() {

    const [isOpen, makeOpen] = React.useState(false)

    function toggle() {
        makeOpen(!isOpen)
    }

    return (
        <nav className='Navbar'>
            <div className="nav-header">
                <img src={logo} alt='Logo' />
                <button className='nav-toggle' onClick={toggle}>
                    <img src={hamburger} alt="hamburger" />
                </button>
            </div>
            <ul className={`${isOpen ? 'active' : ''}`}>
                <li>About</li>
                <li>Projects</li>
                <li>Services</li>  
                <li>Contact</li>          
            </ul>
        </nav>
    )
}
