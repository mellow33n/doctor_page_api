const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email: {
        type: String,
        required: false,
    },
    tel: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    birthdayDate: {
        type: Date,
        required: false,
    },
    sex: {
        type: String,
        required: false
    },
    isAdmin: {
        type: Boolean,
        required: false
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;