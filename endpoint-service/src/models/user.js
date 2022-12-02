const mongoose = require('../database/mongo');

const UserSchema = new mongoose.Schema({
    name: {
        type   : String,
        require: true,
    },
    email: {
        type     : String,
        unique   : true,
        required : true,
        lowrcase : true,
    },
    password: {
        type     : String,
        required : true,
        select   : false, // nao vem no search por padrão    
    },
    createAt:{
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;