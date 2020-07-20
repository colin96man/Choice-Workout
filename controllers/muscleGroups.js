const MuscleGroup = require('../models/muscleGroup');

module.exports = {
    index
}

async function index(req, res) {
    try{
        const muscleGroups = await MuscleGroup.find({});
        res.status(200).json(muscleGroups);
    }
    catch(err){
        res.status(500).json(err);
    }
}