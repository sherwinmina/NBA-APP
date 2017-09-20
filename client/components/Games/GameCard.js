import React from 'react'

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";

let GameCard = (props) => {
  // console.log(props.games)
  const renderTime = props.games.map(item => (
    <Card style={cardStyle} key={item.id}>
      <CardHeader title={item.date} style={cardStyle.header}>
        <h3>{item.awayTeam.City}</h3> @ <h3>{item.homeTeam.City}</h3>
      </CardHeader>
      <CardMedia>
        <img src="https://usatftw.files.wordpress.com/2016/05/logo-golden-state-warriors.png?w=1000&h=600&crop=1" alt="" />
      </CardMedia>
      <CardText>{item.time}</CardText>
    </Card>
  ));
   
  
  return <div>
      {console.log(props.games.map((item, i) => item.id))}
      {!props.games ? <div>Loading...</div> : renderTime}
    </div>;
}

const cardStyle = {
  header:{
    color: '#0085CAe',
    height: '20px',
    background: "#0085CA"
  },
  width: '85%',
  display: 'flex',
  flexDirection: 'row',
  margin: '7px',
  marginLeft: 'auto',
  marginRight: 'auto'
}
export default GameCard