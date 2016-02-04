// set up mongoose
var mongoose = require('mongoose');
var schema = mongoose.Schema;

// Define model schema
var ChatSchema = schema({
    created: Date,
    content: String,
    userid: String,
    username: String,
    room: String,
    project: String
});

var Chat = mongoose.model('Chat', ChatSchema);
// the above is necessary as you might have embedded schemas which you don't export

exports.chatModel = Chat;
