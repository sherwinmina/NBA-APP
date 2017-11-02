import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import '../styles/mainbox.scss'

import ScoreBoard from './ScoreBoard'
import GameSchedule from './Games/GameSchedule'
import PlayerStats from './PlayerStats'
import Injuries from './Injuries'
import Standings from './Standings'
import Teams from './Teams'

class MainBox extends Component {
  render() {
    return (
      <div id="MainBox">
        <Switch>
          <Route exact path="/" component={ScoreBoard} />
          <Route path="/GameSchedule" component={GameSchedule} />
          <Route path="/PlayerStats" component={PlayerStats} />
          <Route path="/Injuries" component={Injuries} />
          <Route path="/Standings" component={Standings} />
          <Route path="/Teams" component={Teams} />
        </Switch>
      </div>
    )
  }
}

export default MainBox
