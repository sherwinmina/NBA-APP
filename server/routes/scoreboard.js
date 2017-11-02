var express = require('express')
var router = express.Router()
var axios = require('axios')

router.get('/', function(req, res, next) {
  function todaysGame() {
    return axios
      .get('http://api.suredbits.com/nba/v0/games')
      .then(response => response.data)
  }

  function getStats() {
    return axios
      .get('http://api.suredbits.com/nba/v0/stats/curry/stephen')
      .then(response => response.data)
  }

  function getBackground() {
    return axios
      .get('http://stats.nba.com/stats/commonplayerinfo?PlayerID=201939')
      .then(response => response.data)
  }

  axios.all([todaysGame(), getStats()]).then(
    axios.spread(function(todaysGame, stats) {
      res.send({ todaysGame, stats })
    })
  )
})

module.exports = router
