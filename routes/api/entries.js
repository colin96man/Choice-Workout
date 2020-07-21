const router = require('express').Router();
const entryCtrl = require('../../controllers/entries');

router.get('/', entryCtrl.index);
router.post('/', entryCtrl.create);
router.put('/:id', entryCtrl.update);
router.delete('/:id', entryCtrl.delete);

module.exports = router;