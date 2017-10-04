import React, { Component } from 'react'
import axios from 'axios'

class Teams extends Component {
  componentDidMount() {
    axios.get('http://api.suredbits.com/nba/v0/games')
      .then( data => console.log(data))
  }

  render () {
    return (
      <div>
        Teams
      </div>
    )
  }
}

export default Teams