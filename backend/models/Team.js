const mongoose = require('mongoose');
const Tournament = require('./Tournament');

const teamSchema = new mongoose.Schema({
    tournament: { type: mongoose.Schema.Types.ObjectId, ref: 'Tournament', required: true },
    name: { type: String, required: true },
    city: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    players: { type: Array, required: true },
    extra_players: { type: Array, required: true },
});

module.exports = mongoose.model('Team', teamSchema);