import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../style.css'

const Item = ({ item }) => {
  const [rating, setRating] = useState(0)

  useEffect(() => {
    const mean = (item.reviews.reduce((a, b) => a + b.rating, 0) / item.reviews.length).toFixed(2)
    setRating(mean)
  }, [item.reviews])

  const createSummary = (text, length) => {
    let summary = text.slice(0, length)
    if (text.length > length) {
      summary += '...'
    }

    return summary
  }

  const createRating = () => {
    if (item.reviews.length > 0) {            
      const starCount = Math.round(rating)
      return `${'★'.repeat(starCount)} (${rating})`
    } 

    return ''
  }

  return (
    <div className='item'>
      <img className='main-image-small' src={item.image} alt={item.title} />          
      <h1 className='item-title'>{item.title}</h1>
      <p className='item-summary'>{createSummary(item.description, 200)}</p>
      <div className="item-footer">
        <div className="item-review">          
          <p>reviews: {item.reviews.length}</p>
          <p className='item-rating'>{createRating()}</p>
        </div>
        <Link to={`/showcase/${item.id}`}><p className='item-view-more'>view more...</p></Link>
      </div>
    </div>
  )
}

export default Item