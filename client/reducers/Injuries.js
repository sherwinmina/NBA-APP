import { FETCH_INJURIES } from "../constants/types";

const INITIAL_STATE = {
  injuries: [], player: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_INJURIES:
      return {
        ...state,
        injuries: action.payload.data.playerinjuries,
        player: action.payload.data.playerinjuries.playerentry
      };

    default:
      return state;
  }
}
