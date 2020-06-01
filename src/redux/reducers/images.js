import {
  ALL_IMAGES
} from '../actions'

const initialState = []

function images(state = initialState, action) {
  switch (action.type) {
    case ALL_IMAGES:
      return []
    default:
      return state
  }
}

export default images