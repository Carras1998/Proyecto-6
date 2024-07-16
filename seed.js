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

    const league1 = new League({
      name: 'Premier League',
      country: 'Inglaterra',
      foundation: 1992,
      logo: 'logo premier league',
      teams: []
    })

    const league2 = new League({
      name: 'La Liga EA Sports',
      country: 'España',
      foundation: 1929,
      logo: 'logo la liga',
      teams: []
    })

    const team1 = new Team({
      name: 'Manchester United',
      league: league1._id,
      foundation: 1878,
      logo: 'escudo man united',
      stadium: 'Old Trafford',
      coach: 'Erik ten Hag',
      legends:
        'Cristiano Ronaldo, Wayne Rooney, Van der Sar, Erik Cantona, Paul Scholes, Ryan Giggs, Roy Keane, George Best, Rio Ferdinand, Bobby Charlton, David Beckham'
    })

    const team2 = new Team({
      name: 'Real Madrid',
      league: league2._id,
      foundation: 1902,
      logo: 'escudo real madrid',
      stadium: 'Santiago Bernabeu',
      coach: 'Carlo Ancelotti',
      legends:
        'Cristiano Ronaldo, Zinedine Zidane, Sergio Ramos, Raúl, Marcelo, Benzema, Modric, Kroos, Alfredo Di Stefano, Butragueño, Iker Casillas, Figo, Fernando Hierro, Puskas, Ronaldo, David Beckham'
    })

    const team3 = new Team({
      name: 'Liverpool',
      foundation: 1892,
      logo: 'Escudo del club',
      stadium: 'Anfield',
      coach: 'Arne Slot',
      legends:
        'Steven Gerrard, Kenny Dalglish, Ian Rush, Fernando Torres, Xabi Alonso, Michael Owen, Dirk Kuyt'
    })

    const team4 = new Team({
      name: 'FC Barcelona',
      foundation: 1899,
      logo: 'Escudo del club',
      stadium: 'Camp Nou',
      coach: 'Hansi Flick',
      legends:
        'Lionel Messi, Andrés Iniesta, Xavi, Carles Puyol, Gerard Piqué, Johan Cruyff, Maradona, Luis Suarez, Ronaldinho'
    })

    league1.teams.push(team1._id, team3._id)
    league2.teams.push(team2._id, team4._id)

    await league1.save()
    await league2.save()
    await team1.save()
    await team2.save()
    await team3.save()
    await team4.save()

    console.log('Base de datos sembrada con éxito')
    process.exit()
  } catch (error) {
    console.error('Error sembrando la base de datos', error)
    process.exit(1)
  }
}

seedDatabase()
