require('../config/database');
const MuscleGroup = require('../models/muscleGroup');
const Workout = require('../models/workout');
const workoutData = require('../data/data');

const muscleGroups = [
    {name: 'legs'},
    {name: 'arms'},
    {name: 'abs'},
    {name: 'shoulders'},
    {name: 'back'},
    {name: 'chest'},
    {name: 'neck'}
]
const muscleGroupMap = {
    legs: ['quadriceps', 'hamstrings', 'glutes', 'calves', 'adductors', 'abductors'],
    arms: ['biceps', 'triceps', 'forearms'],
    abs: ['abdominals'],
    shoulders: ['shoulders', 'traps'],
    back: ['lats', 'middle back', 'lower back'],
    chest: ['chest'],
    neck: ['neck']
}
const p1 = MuscleGroup.deleteMany({});
const p2 = Workout.deleteMany({});

Promise.all([p1, p2])
.then(function(results) {
    return MuscleGroup.create(muscleGroups);
})
.then(function(muscleGroups) {
    const updatedWorkoutData = workoutData.map(workout => {
        const muscleGroup = Object.keys(muscleGroupMap).find(key => muscleGroupMap[key].includes(workout.muscleGroup))
        muscleGroups.forEach(group => {
            if(group.name === muscleGroup) {
                workout.muscleGroup = group
            }
        });
        return workout;
    });
    //console.log(updatedWorkoutData, '<---------- workout data');
    return Workout.create(updatedWorkoutData);
})
.catch(function(err) {
    console.log(err, '<------- error');
})
.then(function() {
    process.exit();
});