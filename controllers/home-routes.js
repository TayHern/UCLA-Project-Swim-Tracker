const router = require('express').Router();
//replace gallery and painting
const { user, session } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  res.render('home');
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/swimmer', (req, res) => {
  res.render('swimmer');
})

module.exports = router;
