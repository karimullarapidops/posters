const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    email: String,
    password: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    },
    resetPasswordToken: String,
    activationToken: String,
    activatedOn: String,
    otp: Number
});

module.exports = mongoose.model('users', userSchema);