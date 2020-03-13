const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// ideally we'd like enumerated types for type and status
const absenteeSchema({
    type: String,   // inPerson or byMail
    instructions: String,
    instructionsUrls: [String],
    delivery: String,
    requirements: String,
    deadline: String
    sourceUrl: String,
    lastChecked: Date,
});

module.export(mongoose.model('Absentee', absenteeSchema));
