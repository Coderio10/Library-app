import React from 'react';
import Categories from './categories'
import "./css/index.css"


export default function HeroSection(props) {
    
    const [action, nextPage] = React.useState(false)

    function btnAction() {
        nextPage(prev => !prev)
    }

    return (
        <div>
            { !action && <section className="hero">
                <h1 className='hero-header'>It's time to starve our ignorance!</h1>   
                <p className='hero-text'>Welcome to the bank of knowledge, A place where you get to learn principles that will shape your life</p>
                <button onClick={btnAction} >Let's Explore</button>
                <p>{action}</p>
            </section> }
            { action && <Categories />}
        </div>

    )
} 