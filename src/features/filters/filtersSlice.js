/* STATE */
const initialState = {
  status: 'all'
}

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'filters/statusChanged': {
      return {
        ...state,
        status: action.payload
      }
    }    
    default:
      return state
  }
}

export default filtersReducer