const mongoose = require('mongoose');
require('dotenv').configure();

// connect mongoDB
var mongoIsConnected = false;
console.log('Connecting to mongoDB...');
mongoose.connect('mongodb+srv://'+process.env.DB_USER+':'+process.env.DB_PASS+@cluster0-bfrfd.mongodb.net/test?retryWrites=true&w=majority', { 
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('connected to monogdb');
    mongoIsConnected = true;
}).catch(err => {
    console.log('no mongodb conection: ', err);
});

exports.handler = (event, context, callback) => {
    var msg;
    if (mongoIsConnected)
        msg = "mongo is connected!"
    else
        msg = ":("
    return callback(null, {
        statusCode: 200,
        body: "hello world" + msg
    });
}
