import React, { Component } from 'react'

import Header from './Header'
import LeftBox from './LeftBox'
import MainBox from './MainBox'

import '../styles/app.scss'

const App = () => (
  <div>
    <Header />
    <div className='both-container'>
      <LeftBox />
      <MainBox />
    </div>
  </div>
);


export default App
