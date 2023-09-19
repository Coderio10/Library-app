// import React from 'react'
// const fs = require('fs')
// const path = require('path')

import React, { useState } from 'react';

// function readFolderandStoreInfo(folderPath) {

//     try {
//         const files = fs.readdirSync(folderPath)
//         const fileData = [] 

//         files.forEach((file) => {
//             // Get the full path of the file
//             const filePath = path.join(folderPath, file)

//             const fileInfo = {
//                 name: file,
//                 path: filePath
//             }

//             fileData.push(fileInfo)
//         })

//         return fileData
//     }
//     catch(error) {
//         console.error('Error reading folder:', error)
//         return []
//     }
// } 

// class MyComponent extends
// React.Component {
//     componentDidMount() {
//         const folderPath = 'C:\Users\Zinox\Desktop\Books\young-Entreprenuer-books'
//         const fileData = readFolderandStoreInfo(folderPath)
//         console.log('File data:', fileData)
//     }

//     render() {

//         return (
//             <div>
//                 <p>Component Loaded</p>
//             </div>
//         )
//     }
// }

// export default MyComponent



// const categoriesData = [
//      {
//        id: 'category1',
//        title: 'Category 1',
//        content: 'Content for Category 1'
//      },
//      {
//        id: 'category2',
//        title: 'Category 2',
//        content: 'Content for Category 2'
//      }
//      // ... add more categories here ...
// ]



const CategorySection = ({ categoriesData }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

     return (
       <div>
         <div id="category-section">
           {categoriesData.map((category) => (
             <button key={category.id} onClick={() => handleCategoryClick(category.id)}>
               {category.title}
             </button>
           ))}
         </div>

         <div id="data-section">
           {selectedCategory &&
             categoriesData.map((category) => (
               <div key={category.id} id={category.id} style={{ display: selectedCategory === category.id ? 'block' : 'none' }}>
                 {category.content}
               </div>
             ))}
         </div>
       </div>
     );
   };

   export default CategorySection;

   

