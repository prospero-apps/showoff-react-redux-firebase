/*  HELPER FUNCTIONS */
// auto-increment id
const nextId = (items) => {
  const maxId = items.reduce((maxId, item) => Math.max(item.id, maxId), -1)
  return maxId + 1
}

/* STATE */
// const initialState = [
//   {
//     id: 0, 
//     title: 'Self-portrait', 
//     author: 'John Brown',
//     description: 'very nice', 
//     images: [],
//     reviews: []
//   },
//   {
//     id: 1, 
//     title: 'Vase', 
//     author: 'Annie Tommaly',
//     description: 'made it myself in one day', 
//     images: [],
//     reviews: []
//   },
//   {
//     id: 2, 
//     title: 'Birthday cake', 
//     author: 'Annie Tommaly',
//     description: 'looks good and tastes even better', 
//     images: [],
//     reviews: []
//   }
// ]
const initialState = []

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'items/itemAdded': {
      return [
        ...state,
        {
          id: nextId(state),
          title: action.payload.title,
          description: action.payload.description,
          images: action.payload.images,
          reviews: []
        }
      ]
    }
    case 'items/itemEdited': {
      return state.map(item => {
        if (item.id !== action.payload.id) {
          return item
        }

        return {
          ...item,
          title: action.payload.title,
          description: action.payload.description,
          images: action.payload.images
        }
      })      
    }
    case 'items/itemDeleted': {
      return state.filter(item => item.id !== action.payload)
    }
    case 'items/reviewAdded': {
      return state.map(item => {
        if (item.id !== action.payload.id) {
          return item
        }

        return {
          ...item,
          reviews: [
            ...item.reviews,
            {
              id: nextId(item.reviews),
              author: action.payload.author,
              rating: action.payload.rating,
              content: action.payload.content
            }
          ]
        }
      })
      
    }
    default:
      return state
  }
}

export default itemsReducer