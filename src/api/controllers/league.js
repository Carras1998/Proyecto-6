const League = require('../models/league')

const getLeagues = async (req, res, next) => {
  try {
    const leagues = await League.find().populate('teams')
    return res.status(200).json(leagues)
  } catch (error) {
    console.error(error)
    return res
      .status(400)
      .json({ message: 'Error al obtener las ligas', error })
  }
}

const getLeagueById = async (req, res, next) => {
  try {
    const { id } = req.params
    const league = await League.findById(id).populate('teams')
    if (!league) {
      return res.status(404).json({ message: 'Liga no encontrada' })
    }
    return res.status(200).json(league)
  } catch (error) {
    console.error(error)
    return res.status(400).json({ message: 'Error al obtener la liga', error })
  }
}

const postLeagues = async (req, res, next) => {
  try {
    const newLeague = new League(req.body)
    const leagueSaved = await newLeague.save()
    return res.status(201).json(leagueSaved)
  } catch (error) {
    console.error(error)
    return res.status(400).json({ message: 'Error al crear la liga', error })
  }
}

const updateLeagues = async (req, res, next) => {
  try {
    const { id } = req.params
    const leagueUpdated = await League.findByIdAndUpdate(id, req.body, {
      new: true
    }).populate('teams')
    return res.status(200).json(leagueUpdated)
  } catch (error) {
    console.error(error)
    return res
      .status(400)
      .json({ message: 'Error al actualizar la liga', error })
  }
}

const deleteLeagues = async (req, res, next) => {
  try {
    const { id } = req.params
    const leagueDeleted = await League.findByIdAndDelete(id)
    return res.status(200).json({
      message: 'Liga eliminada',
      elemento: leagueDeleted
    })
  } catch (error) {
    console.error(error)
    return res.status(400).json({ message: 'Error al eliminar la liga', error })
  }
}

module.exports = {
  getLeagues,
  getLeagueById,
  postLeagues,
  updateLeagues,
  deleteLeagues
}
