import React, { Component } from 'react'
import {connect} from 'react-redux'

import * as actions from "../../actions";
import GameCard from "./GameCard";

class GameSchedule extends Component {
  componentDidMount() {
  if (this.props.games.games.length === 0) {
    this.props.fetchGames();
  }
   
  }
  
  render() {
    console.log(this.props.games);
    return  <GameCard {...this.props.games}/>
   
  }
}

function mapStateToProps(state) {
  return { games: state.games };
}

export default connect(mapStateToProps, actions)(GameSchedule);

