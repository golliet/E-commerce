import {
  ADD_IMAGE,
  REMOVE_IMAGE
} from '../actions.js'

const initialState = []

export function panier(state = initialState, action) {
  switch (action.type) {
    case ADD_IMAGE:
      return [
        state.push(action.payload)
      ]
    case REMOVE_IMAGE:
      return [
        
      ]
    default:
      return state
  }
}

export default panier
