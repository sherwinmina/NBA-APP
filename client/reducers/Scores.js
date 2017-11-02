import { FETCH_SCORES } from '../constants/types'

const INITIAL_STATE = {
  scores: []
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_SCORES:
      return {
        ...state,
        scores: action.payload
      }

    default:
      return state
  }
}
