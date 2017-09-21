import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <div style={styles}>
        <div>
          <img style={styles.logo} src="../../public/NBALogo.svg.png" alt="" />
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