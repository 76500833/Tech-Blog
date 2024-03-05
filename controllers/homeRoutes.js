const router = require('express').Router();
const { Post }= require('../models')

router.get('/', (req, res) => {
    res.render('homepage', {
      loggedIn: req.session.loggedIn
      //
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


  function ensureAuthenticated( req, res, next) {
    if(req.session.loggedIn) {
      return next()
    }
    res.redirect('/login')

  }
  router.get('/dashboard', ensureAuthenticated, async (req, res)=> {
    try {
      //Post.find all
      const userPosts = await Post.findAll({

      })
      const posts = userPosts.map((post) => post.get({ plain: true }));
      console.log(posts)
      res.render('dashboard', {
        layout: 'main',
        loggedIn: req.session.loggedIn,
        posts
      })
      //
    }catch (err) {
      res.status(500).json(err)
    }
  }) 


module.exports = router;
