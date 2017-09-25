import React, { Component } from 'react'
import {connect} from 'react-redux'

import * as actions from "../../actions";
import './style.scss'

import PlayerCard from './PlayerCard'

class PlayerStats extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  componentDidMount() {
    this.props.fetchPlayer();
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    console.log(this.state.name);
    return (
      <div>
        <h3>Player Stats</h3>
        <span>
          <input
            type="text"
            placeholder="First Name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <input type="text" placeholder="Last Name" />
          <button onClick={console.log('sending')}>Search Player</button>
        </span>

        <PlayerCard/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { player: state.playerStats }
}

export default connect(mapStateToProps, actions)(PlayerStats);

