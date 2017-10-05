import React, { Component } from 'react'

import { connect } from 'react-redux'
import * as actions from '../../actions'

class Teams extends Component {
  componentDidMount() {
      this.props.fetchTeam()
  }

  renderTeam() {
    return this.props.team.map(item => <tr key={item.playerId}>
        <td>{item.uniformNumber}</td>
        <td>{item.fullName}</td>
        <td> {item.height}</td>
        <td> {item.weight}</td>
        <td> {item.position}</td>
        <td> {item.status}</td>
        <td> {item.rookieYear}</td>
        <td>
          {item.birthDate.substring(4, 6)} -  {item.birthDate.substring(6, 8)} - {item.birthDate.substring(0, 4)} 
        </td>
      </tr>)
  }

  render () {
    console.log(this.props.team.map(item => item))
    return <div>
        <table style={{ marginTop: '30px' }}>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>HT</th>
            <th>WT</th>
            <th>Position</th>
            <th>Status</th>
            <th>Rookie Year</th>
            <th>Birth Date</th>
          </tr>
          {this.renderTeam()}
        </table>
      </div>
  }
}

function mapStateToProps(state) {
  return { team: state.team.Roster}
}

export default connect(mapStateToProps, actions)(Teams)
