// initial imports
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
var Request = require("request");

//for md
const showdown = require('showdown');
const fs = require('fs')

converter = new showdown.Converter();
converter.setOption('simplifiedAutoLink', 'true');


//const Feedback = require('./models/feedback.js');
//const Deadline = require('./models/deadline.js');
//const Absentee = require('./models/absentee.js');


const { text } = require('express');
// use dotenv if not on heroku
if (! process.env.NODE_ENV === 'production')
    require('dotenv').config();

app.use(express.json({type: 'application/json'}));
app.use(express.urlencoded({extended: true}));

//showdown stuff
// Start of markdown
var textToConvert = `# hello, markdown!
* list
* list
* item
`

async function convertMarkdown(filename) {
    const md = fs.readFileSync(path.join(__dirname+filename+'.md'),'utf8')
    html = converter.makeHtml(md)
    console.log('async func called')
    return html
}



app.get('/billofrights', async function (req, res) {
    const data = await convertMarkdown('/billofrights');
    res.send(data)
    })

  app.get('/allamendments', async function (req, res) {
    const data = await convertMarkdown('/allamendments');
    res.send(data)
  })


// MongoDB stuff
/* connect mongoDB
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
*/



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
