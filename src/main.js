import React from 'react';
import "./css/index.css"
import axios from 'axios'
import BookComponent from './booksComponent';
import img from './assets/side-img.png'
import { FiArrowDownCircle } from "react-icons/fi"


export default function HeroSection() {
   
    // Search Functionality
    const [search, setSearch] = React.useState("")
    const [bookDatas, setData] = React.useState([])
    const [Visibility, setVisibility] = React.useState(false)

    const searchBook = (e) => {

        if (e.key === "Enter") {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCG4U2i3d-EwiYUNdtb-d9CmS8wUPoyRuE&maxResults=40`)
            .then(res => setData(res.data.items))
            .catch(err => console.log(err))
        }
    }

    function loaded() {
        setVisibility(true)
    }

    return (
        <div>
            <section className="hero">
                <div className='text-sec'>
                    <h1 className='hero-header'>It's time to starve our ignorance!</h1>   
                    <p>Look up a book to read, learn principles from it to help better that area of your life</p>
                    <div className='input-sec'>
                        <input type='text' placeholder='Search...' className='input'
                            value={search} onChange={e => setSearch(e.target.value)} onKeyPress={searchBook}/>
                        <button onClick={searchBook}>SEARCH</button>
                    </div>
                </div>
                <div className='img-sec'>
                    <img src={img} alt='books on a shelf'/>
                </div>
                <div className='indicator'>
                    { Visibility && <a href='#bookcomponent'> <FiArrowDownCircle className='icon'/></a>}
                </div>
            </section> 
            <section>
                <BookComponent book={bookDatas} func={loaded} />        
            </section>
        </div>

    )
} 