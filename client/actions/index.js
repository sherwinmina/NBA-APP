import axios from 'axios'
import {
  FETCH_PLAYER,
  FETCH_GAMES,
  FETCH_INJURIES,
  FETCH_STANDINGS,
  FETCH_TEAM,
  FETCH_SCORES
} from '../constants/types'

export function fetchGames() {
  const request = axios.get(
    'https://api.mysportsfeeds.com/v1.1/sample/pull/nba/2016-2017-regular/daily_game_schedule.json?fordate=20161026&'
  )

  return {
    type: FETCH_GAMES,
    payload: request
  }
}

export function fetchPlayer() {
  const url = 'https://nbaapi.herokuapp.com/players'
  const request = axios(url).then(res => res.data)

  return {
    type: FETCH_PLAYER,
    payload: request
  }
}

export function fetchTeam() {
  const url = 'https://nbaapi.herokuapp.com/teams'
  const request = axios(url).then(res => res.data)

  return {
    type: FETCH_TEAM,
    payload: request
  }
}

export function fetchInjuries() {
  const request = axios.get(
    'https://api.mysportsfeeds.com/v1.1/sample/pull/nba/2016-2017-regular/player_injuries.json?'
  )

  return {
    type: FETCH_INJURIES,
    payload: request
  }
}

export function fetchStandings() {
  const request = axios.get(
    'https://api.mysportsfeeds.com/v1.1/sample/pull/nba/2016-2017-regular/overall_team_standings.json'
  )

  return {
    type: FETCH_STANDINGS,
    payload: request
  }
}

export function fetchScores() {
  const url = 'https://nbaapi.herokuapp.com/scoreBoard'
  const request = axios(url).then(res => res.data)

  return {
    type: FETCH_SCORES,
    payload: request
  }
}

// export const fetchUser = () => async dispatch => {
//   const res = await axios.get("/api/current_user");

//   dispatch({ type: FETCH_USER, payload: res.data });
// };

// export const handleToken = token => async dispatch => {
//   const res = await axios.post("/api/stripe", token);

//   dispatch({ type: FETCH_USER, payload: res.data });
// };

// export const submitSurvey = (values, history) => async dispatch => {
//   const res = await axios.post("/api/surveys", values);

//   history.push("/surveys");
//   dispatch({ type: FETCH_USER, payload: res.data });
// };

// export const fetchSurveys = () => async dispatch => {
//   const res = await axios.get("/api/surveys");

//   dispatch({ type: FETCH_SURVEYS, payload: res.data });
// };
