const mongoose = require('mongoose');
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    description: String,
    muscleGroup: {
        type: Schema.Types.ObjectId,
        ref: 'MuscleGroup'
    }
})

module.exports = mongoose.model('Workout', workoutSchema);