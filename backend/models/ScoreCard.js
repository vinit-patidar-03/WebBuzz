const mongoose = require('mongoose');
const scoreCardSchema = new mongoose.Schema({
    match: { type: mongoose.Schema.Types.ObjectId, ref: 'Match', required: true },
    team1_score: { type: Number, required: true },
    team2_score: { type: Number, required: true },
    team1_wickets: { type: Number, required: true },
    team2_wickets: { type: Number, required: true },
    team1_overs: { type: Number, required: true },
    team2_overs: { type: Number, required: true },
    team1_extras: { type: Number, required: true },
    team2_extras: { type: Number, required: true },
    winner: { type: Number, required: true }
})
module.exports = mongoose.model('ScoreCard', scoreCardSchema);