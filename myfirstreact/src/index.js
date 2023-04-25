import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from "./nav"
import Hero from "./hero"
import Card from "./card"
import Play from "./PlayGround"
import Contactcard from "./Contact"
import "./css/index.css"
import Contactimg from "./assets/1.jpg";
import Contactimg1 from "./assets/2.jpg";
import Contactimg2 from "./assets/3.jpg";
import Contactimg3 from "./assets/4.jpg";


const Page = () => {
    return (
      <div>
        <NavBar />
        <Play />
        <Hero />
        <Card />
        <div className="Contact">
          <Contactcard
            img={Contactimg}
            name="Mr. Anointed"
            phone="📞 08098765553"
            email="🧧 asdd@gmail.com"
          />
          <Contactcard
            img={Contactimg1}
            name="Mr. Kayode"
            phone="📞 07098765553"
            email="🧧 astttttdd@gmail.com"
          />
          <Contactcard
            img={Contactimg2}
            name="Mr. Code Rio"
            phone="📞 0809874556"
            email="🧧 coderio97@gmail.com"
          />
          <Contactcard 
            img={Contactimg3}
            name="Mr. Toe Tech"
            phone="📞 08092345677"
            email="🧧 qwerty@gmail.com"
          />
        </div>
      </div>
    )
} 
ReactDOM.render(<Page />, document.getElementById('root'));
