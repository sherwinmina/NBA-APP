import React from 'react'
import './PlayerCard.scss'

let PlayerCard = props => {
  let { firstName, lastName, stats } = props
  console.log(stats.PlayerStats)
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th className="player-photo-container">
              <img
                className="player-photo"
                src={`https://nba-players.herokuapp.com/players/${props.lastName}/${props.firstName}`}
                alt=""
              />
            </th>
            <th>
              <h2>
                {firstName} {lastName}
              </h2>
              <p>Golden State Warriors</p>
              <p>#30</p>
            </th>
            <th />
            <th />
          </tr>

          <tr className="player-info">
            <tr>
              <td className="content-border">
                <h3>HT</h3>
                <p className="content">6'3</p>
              </td>
              <td className="content-border">
                <h3>WT </h3>
                <p className="content">180 lbs</p>
              </td>

              <td className="content-border">
                <h3>College</h3>
                <p className="content">Davidson</p>
              </td>
              <td />
            </tr>

            <tr>
              <td className="content-border">
                <h3>AGE</h3>
                <p className="content">27</p>
              </td>
              <td className="content-border">
                <h3>BORN</h3> <p className="content">3-01-1988</p>
              </td>
              <td className="content-border">
                <h3>DRAFT</h3>
                <p>2009 Round 1 Pick 7</p>
              </td>
              <td className="content-border">
                <h3>EXP</h3>
                <p className="content">8 years</p>
              </td>
            </tr>

            <td>
              <tr>
                <h4>Career Stats</h4>
              </tr>
              <h1>PTS</h1>
              <h2>25.5</h2>
            </td>
            <td>
              <h1>REB</h1> <h2>4.5</h2>
            </td>
            <td>
              <h1>AST</h1>
              <h2>6.3</h2>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PlayerCard
