import { FETCH_TEAM } from '../constants/types'

const INITIAL_STATE = {
  Roster: []
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TEAM:
      return {
        ...state,
        Roster: action.payload
      }

    default:
      return state
  }
}
