const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scheduleSettings = new Schema ({
    maxDaysRange: {
        type: Number,
        required: true
    },
    holidaysRegular: {
        type: Object,
        required: true
    },
    holidaysIregular: {
        type: Object,
        required: true
    },
    hourStartSchedule: {
        type: Date,
        required: true
    },
    hourEndSchedule: {
        type: Date,
        required: true
    }
});

const ScheduleSettings = mongoose.model('Calendar', scheduleSettings);

module.exports = ScheduleSettings;