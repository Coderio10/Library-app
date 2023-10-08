import React from 'react'
import ReactDOM from 'react-dom'
import Main from "./main"
import "./css/index.css"

const Page = () => {

    return (
      <main>
        <Main />
      </main>
    )
} 
ReactDOM.render(<Page />, document.getElementById('root'));
