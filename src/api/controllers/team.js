const Team = require('../models/team')

const getTeams = async (req, res, next) => {
  try {
    const teams = await Team.find()
    return res.status(200).json(teams)
  } catch (error) {
    return res.status(400).json('error')
  }
}

const postTeams = async (req, res, next) => {
  try {
    const newTeam = new Team(req.body)
    const teamSaved = await newTeam.save()
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
    const teamUpdated = await Team.findByIdAndUpdate(id, newTeam, {
      new: true
    })
    return res.status(200).json(teamUpdated)
  } catch (error) {
    return res.status(400).json('error')
  }
}

const deleteTeams = async (req, res, next) => {
  try {
    const { id } = req.params
    const teamDeleted = await Team.findByIdAndDelete(id)
    return res.status(200).json({
      message: 'Liga eliminada',
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
