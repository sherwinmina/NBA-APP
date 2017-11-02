import React from 'react'
import './score-card.scss'

import { CSSTransitionGroup } from 'react-transition-group'

let GameCard = props => {
  console.log(props.scores)
  const renderTime = props.scores.map(item => (
    <div className="game-card" key={item.gameId}>
      <div className="header-info">
        <p className="date">{item.date} </p>
        <p className="time">{item.startTime}</p>
      </div>

      <div className="match-up">
        <div className="team">
          <h1>{item.awayTeam.teamID}</h1>
          <h1>{item.awayTeam.finalScore}</h1>
          <img
            className="logo"
            // src={require(`../../../public/teams/${item.awayTeam.Name}.png`)}
            alt=""
          />
        </div>
        <h3 style={{ paddingTop: '80px' }}>@</h3>
        <div className="team">
          <h1>{item.homeTeam.teamID}</h1>
          <h1>{item.homeTeam.finalScore}</h1>
          <img
            className="logo"
            // src={require(`../../../public/teams/${item.homeTeam.Name}.png`)}
            alt=""
          />
        </div>
      </div>
    </div>
  ))

  return <div>{!props.scores ? <div>Loading...</div> : renderTime}</div>
}

export default GameCard
