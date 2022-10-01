import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import '../style.css'

const ItemDetails = () => {
  let { id } = useParams()

  useEffect(() => {
    console.log(id)
    
  })

  
  return (
    <div className='item-details'>
      <div className="add-item-main-image"></div>
        <div className="add-item-data">
          <label htmlFor='add-item-title'>Title</label>
          <input id="add-item-title"/>
          <div className="add-item-rating">★★★</div>
          <label htmlFor='add-item-description'>Description</label>
          <textarea id="add-item-description" rows={10}/>
          <div>Image</div>
          <input className='add-item-add-image' type='file'/>   
          <button>Add Item</button>       
        </div>     
    </div>
  )
}

export default ItemDetails



// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import '../style.css'
// import noImage from '../images/noimage.png'

// const ItemDetails = ({ item }) => {
//   const [rating, setRating] = useState(0)

//   useEffect(() => {
//     const mean = (item.reviews.reduce((a, b) => a + b.rating, 0) / item.reviews.length).toFixed(2)
//     setRating(mean)
//   }, [item.reviews])

//   const createSummary = (text, length) => {
//     let summary = text.slice(0, length)
//     if (text.length > length) {
//       summary += '...'
//     }

//     return summary
//   }

//   const createRating = () => {
//     if (item.reviews.length > 0) {            
//       const starCount = Math.round(rating)
//       return `${'★'.repeat(starCount)} (${rating})`
//     } 

//     return ''
//   }

//   return (
//     <div className='item-details'>
//       {item.images.length > 0
//       ? <img className='main-image-small' scr={(item.images.find(image => image.isMainImage === true)).url} alt={item.title} />
//       : <img className='main-image-small' scr={noImage} alt={item.title} />
//       }
      
//       <h1 className='item-title'>{item.title}</h1>
//       <p className='item-summary'>{createSummary(item.description, 200)}</p>
//       <div className="item-footer">
//         <div className="item-review">
//           <p>reviews: {item.reviews.length}</p>
//           <p className='item-rating'>{createRating()}</p>
//         </div>
//         <Link to={`/showcase/${item.id}`}><p className='item-view-more'>view more...</p></Link>
//       </div>
//     </div>
//   )
// }

// export default ItemDetails