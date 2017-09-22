import React, { Component } from 'react'
import { connect } from "react-redux";

import * as actions from "../../actions";

import '../../styles/standings.scss'

class Standings extends Component {
  componentDidMount() {
    this.props.fetchStandings();
  }

  render () {
    console.log(this.props.standings);
    return (
     
       <div className="standings">
          <h1>Standings</h1>
       </div>
    )
  }
}

function mapStateToProps(state) {
  return { standings: state.standings };
}

export default connect(mapStateToProps, actions)(Standings);

