import React, { Component } from 'react'
import { connect } from "react-redux";

import * as actions from "../../actions";

class Standings extends Component {
  componentDidMount() {
    this.props.fetchStandings();
  }

  render () {
    return (
      <div>
        Standings
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { standings: state.standings };
}

export default connect(mapStateToProps, actions)(Standings);

