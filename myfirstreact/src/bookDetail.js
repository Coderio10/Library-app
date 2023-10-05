import React from 'react'
import "./css/index.css"

export default function bookComponent({book}) {
    
    console.log(book)

    const searchedData = book.map( item => {

        let Thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
        if (Thumbnail !== undefined) {
            return (
                <div className='bookEle' key={item.id}>
                    <img src={Thumbnail} alt='thumbnail' />
                    <h2>{item.volumeInfo.title}</h2>
                    <h3>Author: {item.volumeInfo.authors}</h3>
                    <p>Description: {item.volumeInfo.description}</p>
                    <p>Publish Date: {item.volumeInfo.publishedDate}</p>
                    <p>Page Count: {item.volumeInfo.pageCount}</p>
                </div>
            )
        }
    }) 

    return (
        <>
            { searchedData }
        </>
        
    )
}