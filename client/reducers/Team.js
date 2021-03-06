import { FETCH_SCORES } from '../constants/types'

const INITIAL_STATE = {
  games: []
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_SCORES:
      return {
        ...state,
        games: action.payload.data
      }

    default:
      return state
  }
}
