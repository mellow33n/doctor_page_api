const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scheduleSlot = new Schema ({
    userID: {
        type: String,
        required: true,
    },
    year: {
        type: Date,
        required: true
    },
    month: {
        type: Date,
        required: true
    },
    day: {
        type: Date,
        required: true
    },
    hour: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    fullDate: {
        type: Date, 
        required: true,
    },
});

const ScheduleSlot = mongoose.model('Calendar', scheduleSlot);

module.exports = ScheduleSlot;