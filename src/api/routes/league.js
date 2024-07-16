const {
  getLeagues,
  getLeagueById,
  postLeagues,
  updateLeagues,
  deleteLeagues
} = require('../controllers/league')
const leaguesRouter = require('express').Router()

leaguesRouter.get('/', getLeagues)
leaguesRouter.get('/:id', getLeagueById)
leaguesRouter.post('/', postLeagues)
leaguesRouter.put('/:id', updateLeagues)
leaguesRouter.delete('/:id', deleteLeagues)

module.exports = leaguesRouter
