const Entry = require('../models/entry');

module.exports = {
    index,
    create,
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

async function deleteEntry(req, res) {
    try{
        const deletedEntry = await Entry.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedEntry);
    }
    catch(err){
        res.status(500).json(err);
    }
}