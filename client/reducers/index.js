import { combineReducers } from "redux";
import games from "./Games";
import playerStats from "./PlayerStats";
import injuries from "./Injuries";
import standings from "./Standings";

const rootReducer = combineReducers({
  games,
  playerStats,
  injuries,
  standings
});

export default rootReducer;
