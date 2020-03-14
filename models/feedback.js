const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    state: String,
    election: String,
    comment: String,
    timestamp: Date,
    status: String
});

module.exports = mongoose.model('Feedback', feedbackSchema);
