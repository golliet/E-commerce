import {
  ADD_IMAGE,
  REMOVE_IMAGE
} from '../actions.js'

const initialState = []

function panier(state = initialState, action) {
  switch (action.type) {
    case ADD_IMAGE:
      return []
    case REMOVE_IMAGE:
      return []
    default:
      return state
  }
}

export default panier
