const Entry = require('../models/entry');

module.exports = {
    index,
    create,
    update,
    delete: deleteEntry
}

async function index(req, res) {
    try{
        const entries = await Entry.find({user: req.user}).populate('workouts');
        res.status(200).json(entries)
    }
    catch(err){
        res.status(500).json(err)
    }
}

async function create(req, res) {
    req.body.user = req.user
    req.body.workouts = req.body.selectedWorkouts
    try{
        const entry = await Entry.create(req.body);
        res.status(201).json(entry);
    }
    catch(err){
        res.status(500).json(err)
    }
}

function update(req, res) {

}

function deleteEntry(req, res) {

}