import React from 'react'
import './gamecard.scss'
// import '../../../public/teams/76ers.png'
// console.log("../../../public/teams/76ers.png")
//  src={require('../../../public/teams/ind.png')}
const indiana = "/public/teams/ind.png";
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
        <img src={indiana} alt="" />
      </CardMedia>
      <CardText className="gamecard">{item.time}</CardText>
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
    // background: "#0085CA"
  },
  width: '85%',
  display: 'flex',
  flexDirection: 'row',
  margin: '7px',
  marginLeft: 'auto',
  marginRight: 'auto'
}
export default GameCard