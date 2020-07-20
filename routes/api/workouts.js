const router = require('express').Router();
const workoutsCtrl = require('../../controllers/workouts');

router.get('/', workoutsCtrl.index);

module.exports = router;