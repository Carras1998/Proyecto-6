const mongoose = require('mongoose')

const leagueSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
    foundation: { type: Number, required: true },
    logo: { type: String, required: true }
  },
  { timestamps: true }
)

const League = mongoose.model('leagues', leagueSchema, 'leagues')
module.exports = League