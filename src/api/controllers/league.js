const League = require('../models/league')

const getLeagues = async (req, res, next) => {
  try {
    const leagues = await League.find().populate('teams')
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
    const league = await League.findById(id)

    league.name = req.body.name || league.name
    league.country = req.body.country || league.country
    league.foundation = req.body.foundation || league.foundation
    league.logo = req.body.logo || league.logo

    // Solo agregamos los equipos nuevos sin duplicar
    req.body.teams.forEach((teamId) => {
      if (!league.teams.includes(teamId)) {
        league.teams.push(teamId)
      }
    })

    const leagueUpdated = await league.save()
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
