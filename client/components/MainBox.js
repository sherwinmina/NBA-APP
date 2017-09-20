import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'

import GameSchedule from './Games/GameSchedule'
import PlayerStats from "./PlayerStats"
import Injuries from "./Injuries"
import Standings from "./Standings"
import Teams from "./Teams"


class MainBox extends Component {
  render () {
    return (
      <div style={styles}>
        <Switch>
          <Route exact path="/gameschedule" component={GameSchedule} />
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

const styles = {
  background: 'rgba(179,220,237,1)',
  flex: 1,
  width: '600px',
  minHeight: '100vh',
  maxHeight: '650px',
  overflowY: 'auto'
}