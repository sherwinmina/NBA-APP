import React, { Component } from 'react'
import {connect} from 'react-redux'

import * as actions from "../../actions";

class PlayerStats extends Component {

  componentDidMount() {
    this.props.fetchPlayer();
  }

  render () {
    return (
      <div>
        
        PlayerStats
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { player: state.playerStats }
}

export default connect(mapStateToProps, actions)(PlayerStats);

