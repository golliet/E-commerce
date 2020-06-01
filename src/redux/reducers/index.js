import { combineReducers } from 'redux'

import images from './images.js'
import panier from './panier.js'

const reducer = combineReducers({
  images,
  panier,
})

export default reducer
