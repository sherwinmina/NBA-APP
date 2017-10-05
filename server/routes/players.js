var express = require('express')
var router = express.Router()
var axios = require('axios')

router.get('/', function(req, res, next) {
  function getPlayers() {
    return axios
      .get('http://api.suredbits.com/nba/v0/players/curry/stephen')
      .then(response => response.data)
  }

  function getStephen() {
    return axios
      .get('http://api.suredbits.com/nba/v0/stats/curry/stephen')
      .then(response => response.data)
  }

  axios.all([getPlayers(), getStephen()]).then(
    axios.spread(function(info, stats) {
      res.send({ info, stats })
    })
  )
})

module.exports = router
