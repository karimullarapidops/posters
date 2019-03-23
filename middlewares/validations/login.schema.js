const Joi = require('joi');

module.exports = {
    email: Joi.string().email().required(),
    password: Joi.string().max(8).regex(/^[a-zA-Z0-9]{3,30}$/).required()
}