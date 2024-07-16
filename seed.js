require('dotenv').config()
const mongoose = require('mongoose')
const League = require('./src/api/models/league')
const Team = require('./src/api/models/team')
const { connectDB } = require('./src/config/db')

connectDB()

const seedDatabase = async () => {
  try {
    await League.deleteMany()
    await Team.deleteMany()

    const premierLeague = new League({
      name: 'Premier League',
      country: 'UK',
      foundation: 1992,
      logo: 'premier_league_logo',
      teams: []
    })

    const laLiga = new League({
      name: 'La Liga',
      country: 'Spain',
      foundation: 1929,
      logo: 'la_liga_logo',
      teams: []
    })

    await premierLeague.save()
    await laLiga.save()

    const manchesterUnited = new Team({
      name: 'Manchester United',
      league: premierLeague._id,
      foundation: 1878,
      logo: 'manchester_united_logo',
      stadium: 'Old Trafford',
      coach: 'Erik ten Hag',
      legends:
        'Sir Alex Ferguson, Cristiano Ronaldo, Wayne Rooney, Eric Cantona, Edwin Van Der Sar, Rian Giggs, Paul Schooles, Nani'
    })

    const liverpool = new Team({
      name: 'Liverpool',
      league: premierLeague._id,
      foundation: 1892,
      logo: 'liverpool_logo',
      stadium: 'Anfield',
      coach: 'Jürgen Klopp',
      legends:
        'Steven Gerrard, Fernando Torres, Luis Suarez, Xabi Alonso, Pepe Reina'
    })

    const realMadrid = new Team({
      name: 'Real Madrid',
      league: laLiga._id,
      foundation: 1902,
      logo: 'real_madrid_logo',
      stadium: 'Santiago Bernabéu',
      coach: 'Carlo Ancelotti',
      legends:
        'Alfredo Di Stéfano, Cristiano Ronaldo, Ronaldo Nazario, Sergio Ramos, Raúl, David Beckham, Iker Casillas, Fernando Hierro, Pepe, Marcelo, Luka Modric, Toni Kroos'
    })

    const barcelona = new Team({
      name: 'FC Barcelona',
      league: laLiga._id,
      foundation: 1899,
      logo: 'fc_barcelona_logo',
      stadium: 'Camp Nou',
      coach: 'Xavi Hernandez',
      legends:
        'Lionel Messi, Xavi Hernandez, Andres Iniesta, Carles Puyol, Gerard Pique, Victor Valdes, Johann Cruyff, Ronald Koeman, Eric Abidal, Jordi Alba, Sergio Busquets, Ronaldinho'
    })

    await manchesterUnited.save()
    await liverpool.save()
    await realMadrid.save()
    await barcelona.save()

    premierLeague.teams.push(manchesterUnited._id, liverpool._id)
    laLiga.teams.push(realMadrid._id, barcelona._id)

    await premierLeague.save()
    await laLiga.save()

    console.log('Base de datos sembrada con éxito')
    process.exit()
  } catch (error) {
    console.error('Error sembrando la base de datos', error)
    process.exit(1)
  }
}

seedDatabase()
