// initial imports
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
var Request = require("request");
const bodyParser = require('body-parser');


//for md
const showdown = require('showdown');

converter = new showdown.Converter();
converter.setOption('simplifiedAutoLink', 'true');

const app = express();
const Feedback = require('./models/feedback.js');
const Deadline = require('./models/deadline.js');
const Absentee = require('./models/absentee.js');
// use dotenv if not on heroku
if (! process.env.NODE_ENV === 'production')
    require('dotenv').config();

app.use(express.json({type: 'application/json'}));
app.use(express.urlencoded({extended: true}));

//showdown stuff
// Start of markdown
var textToConvert = `Heading
=======
## Sub-heading
 
Paragraphs are separated
by a blank line.
 
Two spaces at the end of a line  
produces a line break.
 
Text attributes _italic_, 
**bold**, 'monospace'.
A [link](http://example.com).
Horizontal rule:`;
 
// End of markdown
 
// End of markdown
app.post("/convert", function(req, res, next) {
    if(typeof req.body.content == 'undefined' || req.body.content == null) {
        res.json(["error", "No data found"]);
    } else {
        text = req.body.content;
        html = converter.makeHtml(text);
        res.json(["markdown", html]);
    }
});

Request.post({
    "headers": { "content-type": "application/json" },
    "url": "http://localhost:5000/convert",
    "body": JSON.stringify({
        "content": textToConvert,
    })
}, function(error, response, body){
    console.log("Body: ", body)
    // If we got any connection error, bail out.
    if(error) {
        return console.log(error);
    }
    // Else display the converted text
    console.dir(JSON.parse(body));
});


// MongoDB stuff
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


// middleware -- no longer need body-parser



// backend routes -- eventually to be imported from a separate router dir
// app.use('/api', api);
//
// for now...
app.post('/api/feedback', (req, res) => {
    const state = req.body.selectedState;
    const election = req.body.selectedElection;
    const comment = req.body.comment;
    const timestamp = new Date();
    const feedback = new Feedback({state: state, election: election, comment: comment, timestamp: timestamp, status: 'todo'});
    if (mongoIsConnected) 
	feedback.save(err => console.log('mongoDB connected but could not save feedback:', feedback));
    else
	console.log('mongoDB unconnected; received feedback:', feedback);

    res.send('Thanks for your feedback!');
});


// serve static assets out of client/build if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    // static routes
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log('listening on', port));
