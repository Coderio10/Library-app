// import React from 'react';
// import "./css/index.css";


// export default function HeroSection() {
//     const firstname = 'joe'
//     const lastName  = 'scholes'
//     const date = new Date()
//     const hours = date.getHours()
//     let timeOfDay

//     if(hours < 12) {
//         timeOfDay = "Morning"
//     } else if(hours >= 12 && hours < 17) {
//         timeOfDay = "Afternoon"
//     } else {
//         timeOfDay = "Night"
//     }

//     // write a function to double the items in a array
//     const nums = [1, 2, 3, 4, 5]

//     // *
//     let sqrnums = []
//     nums.flatMap(num => {
//         sqrnums.push(num * num) 
//     })
//     console.log(sqrnums)

//     // **
//     const square = nums.map(function(num){
//         return num * num
//     })
//     console.log(square)

//     // Capitalize the first letter of the elements of this array
//     const names =["alices", "bob", "charlie", "danielle"]
//     const uppercase = names.map((name) => {
//         return name[0].toUpperCase() + name.slice(1)
//     })
//     console.log(uppercase)

//     // take the elements of this array and return something like this <p>qwerty</p>
//     const pokemon = ["bulbasaur", "Charmander", "Sqirtle"]
//     const tagEle = pokemon.map(ele => `<p>${ele}</p>`)
//     console.log(tagEle)

//     return (
//         <section className="hero"> 
//             <p> Hello {firstname} {lastName}!</p>
//             <p>It is currently about {hours} <sup>o'</sup>!</p>
//             <p> Good {timeOfDay}</p>
//             {/* <p>{sqrnums}</p> */}
//         </section>
//     )
// } 