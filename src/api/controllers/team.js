const League = require('../models/league')
const Team = require('../models/team')

const getTeams = async (req, res, next) => {
  try {
    const teams = await Team.find().populate('league')
    return res.status(200).json(teams)
  } catch (error) {
    return res.status(400).json('error')
  }
}

const postTeams = async (req, res, next) => {
  try {
    const newTeam = new Team(req.body)
    const teamSaved = await newTeam.save()

    const league = await League.findById(newTeam.league)
    if (!league.teams.includes(newTeam._id)) {
      league.teams.push(newTeam._id)
      await league.save()
    }

    return res.status(201).json(teamSaved)
  } catch (error) {
    return res.status(400).json('error')
  }
}

const updateTeams = async (req, res, next) => {
  try {
    const { id } = req.params
    const newTeam = new Team(req.body)
    newTeam._id = id
    const teamUpdated = await Team.findByIdAndUpdate(id, newTeam, { new: true })

    const league = await League.findById(newTeam.league)
    if (!league.teams.includes(newTeam._id)) {
      league.teams.push(newTeam._id)
      await league.save()
    }

    return res.status(200).json(teamUpdated)
  } catch (error) {
    return res.status(400).json('error')
  }
}

const deleteTeams = async (req, res, next) => {
  try {
    const { id } = req.params
    const teamDeleted = await Team.findByIdAndDelete(id)

    const league = await League.findById(teamDeleted.league)
    league.teams = league.teams.filter((teamId) => teamId.toString() !== id)
    await league.save()

    return res.status(200).json({
      message: 'Equipo eliminado',
      elemento: teamDeleted
    })
  } catch (error) {
    return res.status(400).json('error')
  }
}

module.exports = {
  getTeams,
  postTeams,
  updateTeams,
  deleteTeams
}
