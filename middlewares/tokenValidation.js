const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    try {
        if(!req.headers['access-token']) {
            return res.status(401).send({ status: false, data: { message: 'unauthorized' } });
        }
        req.user = await jwt.verify(req.headers['access-token'], 'shaik');
        next();
    } catch(err) {
        return res.status(401).send({ status: false, data: { message: 'unauthorized' } });
    }
} 