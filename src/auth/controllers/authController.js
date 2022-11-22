const express    = require('express');
const User       = require('../models/user');
const jwt        = require('jsonwebtoken');
const authConfig = require('../auth');

const router = express.Router();

function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret, {expiresIn: 86400});
}

router.post('/register', async (req, res) => {
    const { email } = req.body;  
    try {
        if  (await User.findOne({ email }))
            return res.status(400).send({error: 'User already exist'})

        const user = await User.create(req.body);

        user.password = undefined;
       
        return res.send({
            user,
            token: generateToken({id: user.id}),
        });
            
    } catch (err) {
        return res.status(400).send({error: 'Registration failed'});
    }
});

router.post('/authentication', async (req, res) => {
    const { email, password } = req.body; 

    try {
        const user  = await User.findOne({ email }).select('+password');

        if (!user)
            return res.status(400).send({error : 'User not found'});

        if (user.password !== password)
            return res.status(400).send({error: 'Invalid Password'}) 

        user.password = undefined;
        
        return res.send({
            user,
            token: generateToken({id: user.id}),
        });
        
    } catch (err) {
        return res.status(400).send({error: 'authentication failed'});
    }
});

module.exports = app => app.use('/auth', router);