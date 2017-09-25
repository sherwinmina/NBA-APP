import axios from "axios";
import { FETCH_PLAYER, FETCH_GAMES, FETCH_INJURIES, FETCH_STANDINGS } from "../constants/types";


const ROOT_URL = "https://api.mysportsfeeds.com/v1.1/sample/pull/nba/2016-2017-regular/daily_game_schedule.json?fordate=20161026&";
// https://nba-players.herokuapp.com/players/duncan/tim
// http://api.suredbits.com/nba/v0/games/phi/2015
// https://api.mysportsfeeds.com/v1.1/sample/pull/nba/2016-2017-regular/player_injuries.json?
// https://api.mysportsfeeds.com/v1.1/sample/pull/nba/2016-2017-regular/overall_team_standings.json?

export function fetchGames() {
  const request = axios.get(`${ROOT_URL}`);

  return {
    type: FETCH_GAMES,
    payload: request
  };
}

export function fetchPlayer(props) {
  const url = "https://nba-players.herokuapp.com/players/duncan/tim"
  const request = axios.all([
      axios.get(' https://api.mysportsfeeds.com/v1.1/sample/pull/nba/2016-2017-regular/overall_team_standings.json'),
      axios.get('https://api.mysportsfeeds.com/v1.1/sample/pull/nba/2016-2017-regular/player_injuries.json?')
    ])
    .then(axios.spread(function (photo, stats) {
      console.log(photo, stats)
    }).catch(error => console.log(error)).catch(error => console.log(error)));
  //   .then(response => console.log(photo, stats))
  //   // .catch(error => console.log(error));
  // }
 
  return {
    type: FETCH_PLAYER,
    payload: request
  };
}


export function fetchInjuries() {
  const request = axios.get("https://api.mysportsfeeds.com/v1.1/sample/pull/nba/2016-2017-regular/player_injuries.json?");

  return {
    type: FETCH_INJURIES,
    payload: request
  };
}


export function fetchStandings() {
  const request = axios.get("https://api.mysportsfeeds.com/v1.1/sample/pull/nba/2016-2017-regular/overall_team_standings.json");

  return {
    type: FETCH_STANDINGS,
    payload: request
  };
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
