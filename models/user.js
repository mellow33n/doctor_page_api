const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email: {
        type: String,
        required: false,
        default: '',
    },
    tel: {
        type: String,
        required: true,
        default: '',
    },
    password: {
        type: String,
        required: true,
        default: '',
    },
    firstName: {
        type: String,
        required: true,
        default: '',
    },
    lastName: {
        type: String,
        required: true,
        default: '',
    },
    birthdayDate: {
        type: Date,
        required: false,
        default: '',
    },
    gender: {
        type: String,
        required: false,
        default: '',
    },
    secretQuestion: {
        type: String,
        required: true,
        default: ''
    },
    secretAnswear: {
        type: String,
        required: true,
        default: ''
    },
    isAdmin: {
        type: Boolean,
        required: false,
        default: false,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;