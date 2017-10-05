var express = require('express')
var router = express.Router()
var axios = require('axios')

router.get('/', function(req, res, next) {
  
  function getTeamRoster(team) {
    return axios
      .get(`http://api.suredbits.com/nba/v0/players/${team}`)
      .then(response => res.send(response.data))
      .catch(err => res.send(err))
  }

  getTeamRoster('gsw')
})

module.exports = router
