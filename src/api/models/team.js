const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    league: { type: mongoose.Schema.Types.ObjectId, ref: 'leagues' },
    foundation: { type: Number, required: true },
    logo: { type: String, required: true },
    stadium: { type: String, required: true, trim: true },
    coach: { type: String, trim: true },
    legends: { type: String, trim: true }
  },
  { timestamps: true }
)

const Team = mongoose.model('teams', teamSchema, 'teams')
module.exports = Team
