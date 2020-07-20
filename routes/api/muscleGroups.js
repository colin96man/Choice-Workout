const router = require('express').Router();
const muscleGroupCtrl = require('../../controllers/muscleGroups');

router.get('/', muscleGroupCtrl.index);

module.exports = router;