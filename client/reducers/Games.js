import {FETCH_GAMES} from '../constants/types'

const INITIAL_STATE = {
  games: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_GAMES:
      return {
       ...state, games: action.payload.data.dailygameschedule.gameentry
      }

    default:
      return state;
  }
}
