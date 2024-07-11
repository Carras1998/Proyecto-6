require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const leaguesRouter = require('./src/api/routes/league')
const teamsRouter = require('./src/api/routes/team')

const app = express()

connectDB()

app.use(express.json())

app.use('/api/v1/leagues', leaguesRouter)
app.use('/api/v1/teams', teamsRouter)

app.use('*', (req, res, next) => {
  return res.status(404).json('Ruta no encontrada')
})

app.listen(3000, () => {
  console.log('Servidor levantado en: http://localhost:3000')
})
