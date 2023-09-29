import React from 'react';
import "./css/index.css"
import Card from './booksComponent'
import axios from 'axios';

export default function NavBar() {

    const [search, setSearch] = React.useState("")
    const [bookData, setData] = React.useState([])

    const searchBook = (evt) => {
        if (evt.key==="Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCG4U2i3d-EwiYUNdtb-d9CmS8wUPoyRuE')
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        }
    }

    return (
        <section>
            <div>
                <input type='text' placeholder='Enter your book name'
                    value={search} onChange={e => setSearch(e.target.value)} onKeyPress={searchBook}/>
                <button>search</button>
            </div>
            <div>
                {
                    <Card book={bookData} />
                }
            </div>
        </section>
    )
} 
