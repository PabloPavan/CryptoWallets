const express        = require('express');
const User           = require('../models/user');
const authMiddleware = require('../middlewares/auth')

const router = express.Router();

router.use(authMiddleware)

router.post('/create', async (req, res) => {
    try {
        res.send({create: true});
            
    } catch (err) {
        return res.status(400).send({error: 'Create failed'});
    }
});

router.post('/delete', async (req, res) => {
    try {
        res.send({delete: true});
        
    } catch (err) {
        return res.status(400).send({error: 'delete failed'});
    }
});

router.post('/update', async (req, res) => {
    try {
        res.send({udpate: true});
        
    } catch (err) {
        return res.status(400).send({error: 'update failed'});
    }
});

module.exports = app => app.use('/wallet', router);