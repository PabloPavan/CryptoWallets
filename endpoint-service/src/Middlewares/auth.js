const jwt        = require('jsonwebtoken');
const authConfig = require('../auth');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    try {
        if (!authHeader)
            return res.status(401).send({ error: 'No token provided'});


        jwt.verify(authHeader.split(' ')[1], authConfig.secret, (err, decoded) => {
            if (err) return res.status(401).send({error: 'Token invalid'});

            req.userId = decoded.id;
            next();
        });

    } catch (err) {
        return res.status(400).send({error: 'MiddleWare Failed'});
    }
};