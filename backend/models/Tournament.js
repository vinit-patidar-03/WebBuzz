const mongoose = require('mongoose');
const tournamentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    year: { type: Number, required: true },
    city: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
    matches: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Match' }],
    capacity: { type: Number, required: true },
    spotsLeft: { type: Number, required: true },
    completed: { type: Boolean, default: false },
    winner: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
})

module.exports = mongoose.model('Tournament', tournamentSchema);