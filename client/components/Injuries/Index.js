import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

import Badge from 'material-ui/Badge'
import IconButton from 'material-ui/IconButton'
import InjuryTable from './InjuryTable'

class Injuries extends Component {
  componentDidMount() {
    if (this.props.injuries.player.length === 0) {
      this.props.fetchInjuries()
    }
  }

  render() {
    return (
      <div style={{ paddingTop: '20px' }}>
        <InjuryTable player={this.props.injuries.player} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { injuries: state.injuries, player: state.player }
}

export default connect(mapStateToProps, actions)(Injuries)
