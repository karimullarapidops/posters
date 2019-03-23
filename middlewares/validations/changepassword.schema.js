const Joi = require('joi');

module.exports = {
    oldPassword: Joi.string().max(8).regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    newPassword: Joi.string().max(8).regex(/^[a-zA-Z0-9]{3,30}$/).required()
}