import React, { Component } from 'react'
import {connect} from 'react-redux'

import * as actions from "../../actions";
import './style.scss'

class PlayerStats extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  componentDidMount() {
    // http://api.suredbits.com/nba/v0/stats/curry/stephen
    // this.props.fetchPlayer();
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { player: state.playerStats }
}

export default connect(mapStateToProps, actions)(PlayerStats);

