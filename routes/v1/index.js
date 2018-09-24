const router = require('express').Router();

/* GET home page. */
router.get('/', function(_, res, _) {
    res.json({
        message: 'it works!'
    });
});

module.exports = router;
