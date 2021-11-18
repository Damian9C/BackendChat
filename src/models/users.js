const {model, Schema} = require('mongoose');

const userModel = new Schema({
    name: String,
    phone: Number,
    img: String,
    age: Number,
    email: String,
    priority: String,
    problem: String,
    promotion: String,
    curp: String,
    password: String,
}, {
    timestamps: true,
});

module.exports = model('User', userModel);
