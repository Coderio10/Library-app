import React from 'react'
import "./css/index.css"
import big from "./assets/React-logo.svg"

export default function bookComponent({show, item, onClose} ) {

    if(!show){
        return null
    }

    let Thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail


    return (
        <div className='pop-up'>
            <div className='pop-up-inner'>
                <button className='close' onClick={() => onClose()}>
                    {/* <FontAwesomeIcon icon={faClose} /> */} x
                </button>
                <div className='innerBox'>
                    <img src={Thumbnail} alt='' />
                    <div className='info'>
                        <h1>{item.volumeInfo.title}</h1>
                        <h3>{item.volumeInfo.authors}</h3>
                        <h4>{item.volumeInfo.publisher} <span>{item.volumeInfo.publishedDate}</span></h4><br/>
                        <a href={item.volumeInfo.previewLink} target='_blank'><button>More</button></a>
                    </div>
                </div>
                <p className='description'>{item.volumeInfo.description}</p>
            </div>
        </div>
        
    )
}
