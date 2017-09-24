import React, { Component } from 'react'
import { connect } from "react-redux";

import * as actions from "../../actions";

import '../../styles/standings.scss'

class Standings extends Component {
  componentDidMount() {
    if (this.props.standings.length === 0) {
      this.props.fetchStandings();
    }
   
  }

  render () {
    console.log(this.props.standings.map(item => item.team));
    return <div className="standings">
        <h1>Standings</h1>
        <p></p>
      </div>;
  }
}

function mapStateToProps(state) {
  return {
           standings: state.standings.standings
         };
}

export default connect(mapStateToProps, actions)(Standings);

