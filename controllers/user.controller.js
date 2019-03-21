const users = require('../models/users');

module.exports = {

    register: async (req, res) => {
        const user = new users(req.validatedResult);
        res.send({ status: true, data: user });
    },

    login: (req, res) => {
        res.send('Login successfully')
    },

    getUserProfile: (req, res) => {
        res.send('GetUserProfile successfully')
    },

    updateUserProfile: (req, res) => {
        res.send('UpdateUserProfile successfully')
    },

    deleteUserProfile: (req, res) => {
        res.send('DeleteUserProfile successfully')
    },

    changePassword: (req, res) => {
        res.send('ChangePassword successfully')
    },

    resetPassword: (req, res) => {
        res.send('ResetPassword successfully')
    }
};