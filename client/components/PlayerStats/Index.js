import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import './style.scss'

import PlayerCard from './PlayerCard'

class PlayerStats extends Component {
  constructor(props) {
    super(props)
    this.state = { firstName: 'stephen', lastName: 'curry' }

    this.handleClick = this.handleClick.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  componentDidMount() {
    this.props.fetchPlayer()
  }

  handleNameChange = event => {
    const name = event.target.name
    this.setState({ [name]: event.target.value })
  }

  handleClick() {
    this.setState({ firstName: '', lastName: '' })
  }

  render() {
    return (
      <div>
        <span>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleNameChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleNameChange}
          />
          <button onClick={this.handleClick}>Search Player</button>
        </span>
        {console.log(this.props.player)}
        <PlayerCard {...this.state} stats={this.props.player} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { player: state.player }
}

export default connect(mapStateToProps, actions)(PlayerStats)
