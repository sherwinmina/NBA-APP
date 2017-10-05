import { FETCH_STANDINGS } from '../constants/types'

const INITIAL_STATE = {
  standings: []
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_STANDINGS:
      return {
        standings: action.payload.data.overallteamstandings.teamstandingsentry
      }

    default:
      return state
  }
}
