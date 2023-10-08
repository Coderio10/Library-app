import React from 'react'
import "./css/index.css"
// import CatComponent from './categoriesComponent'
// import {catData} from './categoriesData'
import BookComponent from './booksComponent'
// import Card from './searchData'
import axios from 'axios';


export default function Cat() {
  
  const [search, setSearch] = React.useState("")
  const [bookDatas, setData] = React.useState([])

    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCG4U2i3d-EwiYUNdtb-d9CmS8wUPoyRuE' + '&maxResults=40')
            .then(res => setData(res.data.items))
            .catch(err => console.log(err))
        }
    }

    return (
        <div>
            <section className="categories">
              <div className='search-section'>
                <div>
                    <h1 className='hero-header'>It's time to starve our ignorance!</h1>   
                    <p className='hero-text'>Welcome to the bank of knowledge, A place where you get to learn principles that will shape your life</p>
                    <input type='text' placeholder='Search...'
                        value={search} onChange={e => setSearch(e.target.value)} onKeyPress={searchBook}/>
                    <button><i class="fas fa-search"></i></button>
                </div>
              </div>
              <div>
                    {/* <BookComponent book={bookDatas}/>     */}
                </div> 
            </section>  
                    
        </div>
    )
}