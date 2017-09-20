import React, { Component } from 'react'

import Header from './Header'
import LeftBox from './LeftBox'
import MainBox from './MainBox'

const App = () => (
      <div>
        <Header /> 
        <div style={Divstyles}>
          <LeftBox />
          <MainBox/>
        </div>
      </div>
    )


export default App

const Divstyles = {
  display: 'flex',
  height: 'auto'
}