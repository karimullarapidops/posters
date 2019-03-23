const Joi = require('joi');
const registerSchema = require('./register.schema');
const loginSchema = require('./login.schema');
const updateSchema = require('./update.schema');
const changepasswordSchema = require('./changepassword.schema');

module.exports = {
    register: async (req, res, next) => {
        try {
            req.validatedResult = await Joi.validate(req.body, registerSchema);
            next();
        } catch(err) {
            return res.status(400).send({ status: false, data: { message: err.details[0].message } })
        }
    },

    login: async (req, res, next) => {
        try {
            req.validatedLogin = await Joi.validate(req.body, loginSchema);
            next();
        } catch(err) {
            return res.status(400).send({ status: false, data: { message: err.details[0].message } })
        }
    },

    update: async (req, res, next) => {
        try {
            req.validatedUpdate = await Joi.validate(req.body, updateSchema);
            next();
        } catch(err) {
            return res.status(400).send({ status: false, data: { message: err.details[0].message } })
        }
    },

    changePassword: async (req, res, next) => {
        try {
            req.validatedChangePassword = await Joi.validate(req.body, changepasswordSchema);
            next();
        } catch(err) {
            console.log(err);
            return res.status(400).send({ status: false, data: { message: err.details[0].message } })
        }
    }
}