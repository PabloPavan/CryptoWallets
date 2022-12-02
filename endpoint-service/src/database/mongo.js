const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/cryptowallets');
mongoose.Procese = global.Promise;

module.exports = mongoose;