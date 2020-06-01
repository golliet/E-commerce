import {
  ADD_IMAGE,
  REMOVE_IMAGE
} from '../actions'

const initialState = []

export function panier(state = initialState, action) {
  switch (action.type) {
    case ADD_IMAGE:
      state.push(action.payload)
      return state
    case REMOVE_IMAGE:
      return [
        
      ]
    default:
      return state
  }
}

export default panier
