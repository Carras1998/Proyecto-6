const {
  getTeams,
  postTeams,
  updateTeams,
  deleteTeams
} = require('../controllers/team')
const teamsRouter = require('express').Router()

teamsRouter.get('/', getTeams)
teamsRouter.post('/', postTeams)
teamsRouter.put('/:id', updateTeams)
teamsRouter.delete('/:id', deleteTeams)

module.exports = teamsRouter
