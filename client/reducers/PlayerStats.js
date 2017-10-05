import { FETCH_PLAYER } from '../constants/types'

const INITIAL_STATE = {
  info: {},
  stats: {}
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PLAYER:
      return {
        ...state,
        info: action.payload.info[0],
        stats: action.payload.stats[0]
      }

    default:
      return state
  }
}
