import React from 'react'
import "./css/index.css"

export default function bookComponent({book}) {

    return (
        <div className='pop-up'>
            <div className='pop-up-inner'>
                <button className='close'>
                    {/* <FontAwesomeIcon icon={faClose} /> */}
                </button>
                <div className='innerBox'>
                    <img src='./assets/React-logo.svg' alt='' />
                    <div className='info'>
                        <h1> Eloquent JavaScript </h1>
                        <h2>Java Kate</h2><br />
                        <h4>pricee Ltd.<span>2016-19-13</span></h4><br/>
                        <a href='#'><button>More</button></a>
                    </div>
                </div>
                <h4 className='description'>
                    lorem ipsumdsnfdfewhfjikwefhwefbw fweufwtfieriierg errerurwferuhueg urwefyergyr uhgreuthwfrygreuiertwerf uigergerger eruertferuerhgguhueggerguerguhherureghergeruhhtgerugher 8tre
                </h4>
            </div>
        </div>
        
    )
}
