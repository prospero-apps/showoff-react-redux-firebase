import { combineReducers } from "redux"

import itemsReducer from "./features/items/itemsSlice"
import filtersReducer from "./features/filters/filtersSlice"

const rootReducer = combineReducers({
  items: itemsReducer,
  filters: filtersReducer
})

export default rootReducer
