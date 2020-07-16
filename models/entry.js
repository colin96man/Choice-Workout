const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
    date: Date,
    workout: {
        type: Schema.Types.ObjectId,
        ref: 'Workout'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Entry', entrySchema);