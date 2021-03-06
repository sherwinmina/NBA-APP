import React from 'react'
import './PlayerCard.scss'

let PlayerCard = props => {
  let { firstName, lastName, stats } = props
  let {
    weight,
    height,
    fullName,
    rookieYear,
    lastYear,
    uniformNumber,
    team,
    position,
    birthDate
  } = stats.info
  let { st, fta, bs, off, pf, fgm, pts, ftm, fga, ast } = stats.stats
  // console.log(stats.info.weight)
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
              <h2>{fullName}</h2>
              <p>{team}</p>
              <p>#{uniformNumber}</p>
              <p>{position}</p>
            </th>
            <th />
            <th />
          </tr>

          <tr className="player-info">
            <tr>
              <td className="content-border">
                <h3>HT</h3>
                <p className="content">{height}</p>
              </td>
              <td className="content-border">
                <h3>WT </h3>
                <p className="content">{weight} lbs</p>
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
                <p>{rookieYear} Round 1 Pick 7</p>
              </td>
              <td className="content-border">
                <h3>EXP</h3>
                <p className="content">8 years</p>
              </td>
            </tr>

            <td>
              <tr>
                <h4>{lastYear} Stats</h4>
              </tr>
              <h1>PTS</h1>
              <h2>{pts}</h2>
            </td>
            <td>
              <h1>STL</h1> <h2>{st}</h2>
            </td>
            <td>
              <h1>AST</h1>
              <h2>{ast}</h2>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PlayerCard
