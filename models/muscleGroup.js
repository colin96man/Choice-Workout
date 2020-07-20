const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const muscleGroupSchema = new Schema({
    name: String,
})

module.exports = mongoose.model('MuscleGroup', muscleGroupSchema);