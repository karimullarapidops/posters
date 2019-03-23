const Joi = require('joi');

module.exports = {
    firstName: Joi.string().required(),
    lastName: Joi.string().required()
}