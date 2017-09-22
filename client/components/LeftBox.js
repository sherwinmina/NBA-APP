import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import { List, ListItem } from "material-ui/List";

class LeftBox extends Component {
  render () {
    return <List style={styles}>
        <ListItem>
          <Link style={styles.link} to="/gameschedule">Game Schedule</Link>
        </ListItem>
        <ListItem>
          <Link style={styles.link} to="/PlayerStats">Player Stats</Link>
        </ListItem>
        <ListItem>
          <Link style={styles.link} to="/Standings">Standings</Link>
        </ListItem>
        <ListItem>
          <Link style={styles.link}  to="/Teams">Teams</Link>
        </ListItem>
        <ListItem>
          <Link style={styles.link} to="/Injuries">Injuries</Link>
        </ListItem>
      </List>
  }
}

export default LeftBox

const styles ={
  background:'#C4CED3',
  flex: 1,
  flexDirection: 'row',
  minWidth: '180px',
  maxWidth: '30%',
  width: '200px',
  link: {
    textDecoration: 'none', color: 'grey'
  }
}