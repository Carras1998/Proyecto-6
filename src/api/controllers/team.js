const Team = require('../models/team')

const getTeams = async (req, res, next) => {
  try {
    const teams = await Team.find().populate('league')
    return res.status(200).json(teams)
  } catch (error) {
    console.error(error)
    return res
      .status(400)
      .json({ message: 'Error al obtener los equipos', error })
  }
}

const getTeamById = async (req, res, next) => {
  try {
    const { id } = req.params
    const team = await Team.findById(id).populate('league')
    if (!team) {
      return res.status(404).json({ message: 'Equipo no encontrado' })
    }
    return res.status(200).json(team)
  } catch (error) {
    console.error(error)
    return res
      .status(400)
      .json({ message: 'Error al obtener el equipo', error })
  }
}

const postTeams = async (req, res, next) => {
  try {
    const newTeam = new Team(req.body)
    const teamSaved = await newTeam.save()
    return res.status(201).json(teamSaved)
  } catch (error) {
    console.error(error)
    return res.status(400).json({ message: 'Error al crear el equipo', error })
  }
}

const updateTeams = async (req, res, next) => {
  try {
    const { id } = req.params
    const teamUpdated = await Team.findByIdAndUpdate(id, req.body, {
      new: true
    }).populate('league')
    return res.status(200).json(teamUpdated)
  } catch (error) {
    console.error(error)
    return res
      .status(400)
      .json({ message: 'Error al actualizar el equipo', error })
  }
}

const deleteTeams = async (req, res, next) => {
  try {
    const { id } = req.params
    const teamDeleted = await Team.findByIdAndDelete(id)
    return res.status(200).json({
      message: 'Equipo eliminado',
      elemento: teamDeleted
    })
  } catch (error) {
    console.error(error)
    return res
      .status(400)
      .json({ message: 'Error al eliminar el equipo', error })
  }
}

module.exports = {
  getTeams,
  getTeamById,
  postTeams,
  updateTeams,
  deleteTeams
}
