const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cryptowallets');
mongoose.Procese = global.Promise;

module.exports = mongoose;