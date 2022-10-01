import React, { useEffect, useState } from 'react'
import '../style.css'
import ItemsList from './ItemsList'
import Filters from './Filters'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase.config'

const initialState = [
  {
    id: 0, 
    title: 'Self-portrait', 
    author: 'John Brown',
    description: 'very nice', 
    images: [{
        id: 0,
        url: './images/fish.jpg',
        isMainImage: true
      },
      {
        id: 1,
        url: './images/pizza.jpg',
        isMainImage: false
      },
      {
        id: 2,
        url: './images/prawns.jpg',
        isMainImage: false
      },
      {
        id: 3,
        url: './images/restaurant.jpg',
        isMainImage: false
      },
      {
        id: 4,
        url: './images/rice.jpg',
        isMainImage: false      
    }],
    reviews: []
  },
  {
    id: 1, 
    title: 'Vase', 
    author: 'Annie Tommaly',
    description: 'made it myself in one day', 
    images: [{
        id: 0,
        url: './images/salmon.jpg',
        isMainImage: true
      },
      {
        id: 1,
        url: './images/soup.jpg',
        isMainImage: false
      },
      {
        id: 2,
        url: './images/steak.jpg',
        isMainImage: false
      },
      {
        id: 4,
        url: './images/sushi.jpg',
        isMainImage: false      
    }],
    reviews: [{
        id: 0,
        author: 'Luke Daniels',
        rating: 0,
        content: 'worst thing I have ever seen'
      },
      {
        id: 1,
        author: 'Dina Poons',
        rating: 3,
        content: 'could be better'      
    }]
  },
  {
    id: 2, 
    title: 'Birthday cake', 
    author: 'Annie Tommaly',
    description: 'looks good and tastes even better', 
    images: [],
    reviews: [{
        id: 0,
        author: 'Jane Sparrow',
        rating: 4,
        content: 'very nice'
      },
      {
        id: 1,
        author: 'Jane Billmore',
        rating: 2,
        content: 'rather poor'
      },
      {
        id: 2,
        author: 'Alice McHenry',
        rating: 5,
        content: 'it rocks'      
    }]
  }
]


const HomePage = () => {
  const [items, setItems] = useState([])  
  const itemsCollectionRef = collection(db, 'items')

  useEffect(() => {
    const getItems = async () => {
      const data = await getDocs(itemsCollectionRef)
      setItems(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    }

    getItems()
  })

  return (
    <div id='home-page'>
      <Filters />
      <ItemsList items={items} />      
    </div>
  )
}


// const HomePage = () => {
//   const [items, setItems] = useState(initialState)  

//   return (
//     <div id='home-page'>
//       <Filters />
//       <ItemsList items={items} />      
//     </div>
//   )
// }


export default HomePage