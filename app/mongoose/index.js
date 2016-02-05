// Mongoose connect is called once by the app.js & connection established
// No need to include it elsewhere
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/murmur-db');

// I have just connected, and I'm not exporting anything from here
