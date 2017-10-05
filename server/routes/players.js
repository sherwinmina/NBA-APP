var express = require('express')
var router = express.Router()
var axios = require('axios')

router.get('/', function(req, res, next) {
  function getInfo() {
    return axios
      .get('http://api.suredbits.com/nba/v0/players/curry/stephen')
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

  axios.all([getInfo(), getStats()]).then(
    axios.spread(function(info, stats) {
      res.send({ info, stats })
    })
  )
})

module.exports = router
