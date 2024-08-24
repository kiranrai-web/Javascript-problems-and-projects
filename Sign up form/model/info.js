const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
    email: String,
    password: String
})

const info = mongoose.model('info', infoSchema);
module.exports = info;