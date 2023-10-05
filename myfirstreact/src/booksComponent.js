import React, { useCallback } from 'react'
import "./css/index.css"
import Modal from './modal'


export default function BookComponent({book}) {
    
    const [show, setShow] = React.useState(false) 
    const [bookItem, setItem] = React.useState()                
    
    console.log(book)

    const toggleBtn = useCallback(() => {
        setShow(prev => !prev)
    })
    
    const searchedData = book.map(item => {
        let Thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
        if (Thumbnail !== undefined) {
            return (
                <>
                    <div className='bookEle' onClick={() => { setShow(true); setItem(item)}} key={item.id}>
                        <img src={Thumbnail} alt='Thumbnail' />
                        <p>{item.volumeInfo.title}</p>
                    </div>
                    {show && <span>
                        <Modal show={show} item={bookItem} onClose={toggleBtn}/>
                    </span>}
                </>       
            )
        }
    }) 

    console.log(searchedData)
    return (
        <div className='result-section'>
            {searchedData }
        </div>
        
    )
}