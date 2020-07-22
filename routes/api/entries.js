const router = require('express').Router();
const entryCtrl = require('../../controllers/entries');

router.get('/', checkAuth, entryCtrl.index);
router.post('/', checkAuth, entryCtrl.create);
router.delete('/:id', checkAuth, entryCtrl.delete);

function checkAuth(req, res, next) {
    if(req.user) return next();
    return res.status(501).json({msg: 'Not Authorized'});
}

module.exports = router;