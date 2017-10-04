var express = require('express')
var router = express.Router()
var axios = require('axios')

router.get('/', function(req, res, next) {
  // axios('http://api.suredbits.com/nba/v0/players/dal')
  // .then(response => res.send(response.data))
  // .catch( err => res.send(err))

  function getPlayers() {
    return axios
      .get('http://api.suredbits.com/nba/v0/players/dal')
      .then(response => response.data)
  }

  function getTeams(){
    return axios(
      'https://nba-players.herokuapp.com/players/curry/stephen',
      {
        responseType: 'arraybuffer'
      }
    ).then(response =>
      new Buffer(response.data, 'binary').toString('base64')
    )
  }

  axios
    .all([getPlayers(), getTeams()])
    .then(axios.spread(function(dal, phi) {
       res.send({dal, phi})
      }))

})

module.exports = router
