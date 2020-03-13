const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// ideally we'd like enumerated types for type and status
const deadlineSchema = new Schema({
    date: Date,
    type: String,
    status: String,
    notes: String
});

module.exports = mongoose.model('Deadline', deadlineSchema);
