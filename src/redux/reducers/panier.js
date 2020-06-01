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
      return state.filter(image => image.id !== action.payload.id)
    default:
      return state
  }
}

export default panier
