import {
  SET_IMAGES
} from '../actions'

const initialState = []

export function images(state = initialState, action) {
  switch (action.type) {
    case SET_IMAGES:
      return action.payload
    default:
      return state
  }
}

export default images