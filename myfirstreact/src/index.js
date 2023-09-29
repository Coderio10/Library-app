import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from "./nav"
import Data from "./data"
import Hero from "./hero"
import Card from "./card"
import Play from "./PlayGround"
import Contactcard from "./Contact"
import ContactData from "./contactData"
import "./css/index.css"
import pdf from './assets/how-to-be-yourself.pdf'

const Page = () => {

    return (
      <main>
        <NavBar />
        <Hero />
      </main>
    )
} 
ReactDOM.render(<Page />, document.getElementById('root'));
