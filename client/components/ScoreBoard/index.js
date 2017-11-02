import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import ScoreCard from './ScoreCard'
import CircularProgress from 'material-ui/CircularProgress'

class ScoreBoard extends Component {
  componentDidMount() {
    this.props.fetchScores()
  }

  render() {
    return (
      <div>
        {!this.props.scores ? (
          <CircularProgress
            size={60}
            thickness={7}
            style={{ marginTop: '250px' }}
          />
        ) : (
          <ScoreCard {...this.props} />
        )}
      </div>
    )
  }
}

function mapStateToProps({ scores }) {
  return { scores: scores.scores.todaysGame }
}

export default connect(mapStateToProps, actions)(ScoreBoard)
