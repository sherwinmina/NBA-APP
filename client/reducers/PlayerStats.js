import { FETCH_PLAYER } from '../constants/types'

const INITIAL_STATE = {
  PlayerStats: []
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PLAYER:
      return {
        ...state,
        PlayerStats: action.payload
      }

    default:
      return state
  }
}
