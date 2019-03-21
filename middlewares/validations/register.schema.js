const Joi = require('joi');

module.exports = {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    phoneNumber: Joi.string().min(10).max(10).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).regex(/^[a-zA-Z0-9]{3,30}$/).required()
}