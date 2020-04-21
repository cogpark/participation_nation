const mongoose = require('mongoose');
require('dotenv').configure();

// connect mongoDB
var mongoIsConnected = false;
console.log('Connecting to mongoDB...');
mongoose.connect('mongodb+srv://'+process.env.DB_USER+':'+process.env.DB_PASS+'@cluster0-bfrfd.mongodb.net/test?retryWrites=true&w=majority', { 
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('connected to monogdb');
    mongoIsConnected = true;
}).catch(err => {
    console.log('no mongodb conection: ', err);
});

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        console.log('received a non-post request to feedback route');
        return {
            statusCode: 405,
            body: "method not allowed"
        }
    }

    const state = req.body.selectedState;
    const election = req.body.selectedElection;
    const comment = req.body.comment;
    const timestamp = new Date();
    const feedback = new Feedback({state: state, election: election, comment: comment, timestamp: timestamp, status: 'todo'});

    if (mongoIsConnected) {
	feedback.save(err => {
            console.log('could not save feedback:', feedback);
            return {
                statusCode: 500,
                body: JSON.stringify({
                    error: err,
                    msg: "MongoDB error",
                    feedback: feedback
                })
            }

	});
        console.log('saving feedback:', feedback);
        return {
            statusCode: 200,
            body: JSON.stringify({
                error: null,
                msg: "Success",
                feedback: feedback
            })
        }
    } else {
        console.log('mongodb not connected; feedback:', feedback);
        return {
            statusCode: 200,
            body: JSON.stringify({
                error: null,
                msg: "MongoDB is not connected",
                feedback: feedback
            })
        }
    }
}
