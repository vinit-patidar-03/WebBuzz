const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    tournament: { type: mongoose.Schema.Types.ObjectId, ref: 'Tournament', required: true },
    year: { type: Number, required: true },
    date: { type: Date, required: true },
    venue: { type: String, required: true },
    round: { type: Number, required: true },
    team1: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
    team2: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
    completed: { type: Boolean },
    team1_score: { type: Number },
    team2_score: { type: Number },
    team1_wickets: { type: Number },
    team2_wickets: { type: Number },
    team1_overs: { type: Number },
    team2_overs: { type: Number },
    team1_extras: { type: Number },
    team2_extras: { type: Number },
    winner: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;
