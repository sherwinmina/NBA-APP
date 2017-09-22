import React from 'react'
import './gamecard.scss'
// import '../../../public/teams/76ers.png'
// console.log("../../../public/teams/76ers.png")
//  src={require('../../../public/teams/ind.png')}
const teams = "/public/teams/";


let GameCard = (props) => {
  // console.log(props.games)
  const renderTime = props.games.map(item => (
    <div className="game-card" key={item.id}>
      <div className='header-info'>
        <p className="date">{item.date} </p>
        <p className="time">{item.time}</p>
      </div>

      <div className="match-up">
        <div className="team">
          <h1>{item.awayTeam.City}</h1>
          <img
            className="logo"
            src={`${teams}${item.awayTeam.Name}.png`}
            alt=""
          />
        </div>
        <h3 style={{paddingTop: '80px'}}>@</h3>
        <div className="team">
          <h1>{item.homeTeam.City}</h1>
          <img
            className="logo"
            src={`${teams}${item.homeTeam.Name}.png`}
            alt=""
          />
        </div>
      </div>
    </div>
  ));
   
  
  return <div>
      {console.log(props.games.map((item, i) => item.id))}
      {!props.games ? <div>Loading...</div> : renderTime}
    </div>;
}


export default GameCard