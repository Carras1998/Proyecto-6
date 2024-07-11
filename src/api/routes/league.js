const {
  getLeagues,
  postLeagues,
  updateLeagues,
  deleteLeagues
} = require('../controllers/league')
const leaguesRouter = require('express').Router()

leaguesRouter.get('/', getLeagues)
leaguesRouter.post('/', postLeagues)
leaguesRouter.put('/:id', updateLeagues)
leaguesRouter.delete('/:id', deleteLeagues)

module.exports = leaguesRouter
