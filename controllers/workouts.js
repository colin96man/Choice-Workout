const Workout = require('../models/workout');

module.exports = {
    index
}

async function index(req, res) {
    try{
        const workouts = await Workout.find({});
        res.status(200).json(workouts);
    }
    catch(err){
        res.status(500).json(err);
    }
}