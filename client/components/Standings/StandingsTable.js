import React from 'react';
import './style.scss'

let StandingsTable = (props) => {
  
  return <table className="standings-container">
      <tr>
        <th>Rank</th> <th>Team</th> <th>Wins</th> <th>Losses</th>
      </tr>
      {props.standings.map(item => (
        <tr key={item.rank} className="row-container">
          {console.log(item.stats.Wins["@abbreviation"])}
          <th>{item.rank}</th>
          <th className="team-name">
            {item.team.City} {item.team.Name}{" "}
          </th>
          <th>{item.stats.Wins["#text"]} </th>
          <th>{item.stats.Losses["#text"]}</th>
        </tr>
      ))}
    </table>;
}

export default StandingsTable