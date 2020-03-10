const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

require('dotenv').config();


// connect mongoDB
console.log('Connecting to mongoDB...');
mongoose.connect('mongodb+srv://'+process.env.DB_USER+':'+process.env.DB_PASS+'@cluster0-bfrfd.mongodb.net/test?retryWrites=true&w=majority', { 
	useUnifiedTopology: true,
	useNewUrlParser: true
}).then(() => {
	console.log('connected to monogdb');
}).catch(err => {
	console.log('no mongodb conection: ', err);
});


// middleware -- we no longer need body-parser
app.use(express.urlencoded({extended: true}));


// backend routes -- eventually to be imported from a separate router dir
// app.use('/api', api);
//
// for now...
app.post('/api/feedback', (req, res) => {
    console.log(req.body);
    res.redirect('/');
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
