import React from 'react'
import "./css/index.css"

export default function bookComponent({item, onClose} ) {

    let Thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail


    return (
        <div className='pop-up'>
            <div className='pop-up-inner'>
                <button className='close' onClick={() => onClose()}> X </button>
                <div className='innerBox'>
                    <img src={Thumbnail} alt='' />
                    <div className='info'>
                        <h1>{item.volumeInfo.title}</h1>
                        <h3>{item.volumeInfo.authors}</h3>
                        <h4>{item.volumeInfo.publisher} <span>{item.volumeInfo.publishedDate}</span></h4><br/>
                        <a href={item.volumeInfo.previewLink} target='_blank' rel='noreferrer'><button>More</button></a>
                    </div>
                </div>
                <p className='description'>{item.volumeInfo.description}</p>
            </div>
        </div>
        
    )
}
