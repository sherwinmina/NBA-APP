import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <div style={styles}>
        <div>
          <img style={styles.logo} src="http://www.davincitees.com/wp-content/uploads/2016/03/NBALogo.svg.png" alt="" />
        </div>
      </div>
    );
  }
}

export default Header

const styles={
  background:"#006bb6",
  height: '80px',
  logo: {
    height: '70px',
    padding: '5px'
  }
}