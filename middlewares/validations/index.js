const Joi = require('joi');
const registerSchema = require('./register.schema');

module.exports = {
    register: async (req, res, next) => {
        try {
            req.validatedResult = await Joi.validate(req.body, registerSchema);
            next();
        } catch(err) {
            return res.status(400).send({ status: false, data: { message: err.details[0].message } })
        }
    }
}