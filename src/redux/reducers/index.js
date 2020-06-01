import { combineReducers } from 'redux'

import images from './images.js'
import panier from './panier.js'
import pagin from './pagin.js'

const reducer = combineReducers({
  images,
  panier,
  pagin,
})

export default reducer
