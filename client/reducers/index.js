import { combineReducers } from "redux";
import games from "./Games";
import player from "./PlayerStats";
import injuries from "./Injuries";
import standings from "./Standings";
import team from './Team'

const rootReducer = combineReducers({
  games,
  player,
  injuries,
  standings,
  team
});

export default rootReducer;
