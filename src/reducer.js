import { combineReducers } from 'redux'
import { productReducer } from './contact/logic' 

const rootReducer = combineReducers({
  products: productReducer
})

export default rootReducer