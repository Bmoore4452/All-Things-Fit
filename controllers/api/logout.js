const router = require('express').Router();

router.get('/logout', (req, res) => {
  req.session.destroy();
});


module.exports = router;