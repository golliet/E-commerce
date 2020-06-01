import {
  PAGIN_UP,
  PAGIN_DOWN
} from '../actions'

const initialState = 15

export function pagin(state = initialState, action) {
  switch (action.type) {
    case PAGIN_UP:
      return state + 15
    case PAGIN_DOWN:
      return state - 15 >= 15 ? state - 15 : 15
    default:
      return state
  }
}

export default pagin
