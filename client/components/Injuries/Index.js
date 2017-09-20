import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'

import Badge from "material-ui/Badge";
import IconButton from "material-ui/IconButton";
import InjuryTable from './InjuryTable'

class Injuries extends Component {
  componentDidMount(){
    this.props.fetchInjuries()
  }

 
  render () {
    return <div>
        <h3>
          <h2>
            List Up dated on
          </h2> {this.props.injuries.injuries.lastUpdatedOn}
        </h3>
        {console.log(this.props.injuries.player)}
        <InjuryTable player={this.props.injuries.player} />
      </div>;
  }
}

function mapStateToProps(state) {
  return { injuries: state.injuries, player: state.player };
}

export default connect(mapStateToProps, actions)(Injuries);

