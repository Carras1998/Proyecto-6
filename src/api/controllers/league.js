const League = require('../models/league')

const getLeagues = async (req, res, next) => {
  try {
    const leagues = await League.find()
    return res.status(200).json(leagues)
  } catch (error) {
    return res.status(400).json('error')
  }
}

const postLeagues = async (req, res, next) => {
  try {
    const newLeague = new League(req.body)
    const leagueSaved = await newLeague.save()
    return res.status(201).json(leagueSaved)
  } catch (error) {
    return res.status(400).json('error')
  }
}

const updateLeagues = async (req, res, next) => {
  try {
    const { id } = req.params
    const newLeague = new League(req.body)
    newLeague._id = id
    const leagueUpdated = await League.findByIdAndUpdate(id, newLeague, {
      new: true
    })
    return res.status(200).json(leagueUpdated)
  } catch (error) {
    return res.status(400).json('error')
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
    return res.status(400).json('error')
  }
}

module.exports = {
  getLeagues,
  postLeagues,
  updateLeagues,
  deleteLeagues
}
