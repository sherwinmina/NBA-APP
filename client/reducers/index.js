import { combineReducers } from 'redux'
import games from './Games'
import player from './PlayerStats'
import injuries from './Injuries'
import standings from './Standings'
import team from './Team'
import scores from './Scores'

const rootReducer = combineReducers({
  games,
  player,
  injuries,
  standings,
  team,
  scores
})

export default rootReducer
