const {model, Schema} = require('mongoose');

const messageModel = new Schema({
    users: Array,
    conversation: Array,
}, {
    timestamps: true,
});

module.exports = model('Message', messageModel);
