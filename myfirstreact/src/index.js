import React from 'react'
import ReactDOM from 'react-dom'
// import NavBar from "./nav"
import Data from "./data"
import Hero from "./hero"
import Card from "./card"
import Play from "./PlayGround"
import Contactcard from "./Contact"
import ContactData from "./contactData"
import "./css/index.css"
import pdf from './assets/how-to-be-yourself.pdf'

const Page = () => {
  
    const cards = Data.map(item => {
      return (
        <Card 
          key={item.id}
          {...item}
        />
      )
    })

    const Contactcards = ContactData.map(item => {
      return (
        <Contactcard 
          key={item.id}
          {...item}
        />
      )
    })

    return (
      <main>
        <Hero />
        <section className='cardSection'>{cards}</section>
        <div className="Contact">{Contactcards}</div>
        <input type='file' />
      </main>
    )
} 
ReactDOM.render(<Page />, document.getElementById('root'));
