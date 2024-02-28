const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('homepage', {
      loggedIn: req.session.loggedIn
    });
});
router.get('/signup', async (req, res) => {
    try {
      res.render('signup', {
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  router.get('/login', async (req, res) => {
    try {
      res.render('login', {
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;
