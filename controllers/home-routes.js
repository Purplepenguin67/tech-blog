const router = require('express').Router();

const withAuth = require('../utils/auth');

const { Post, Comment, User } = require('../models');



router.get('/', async (req, res) => {
    try {
      
      const postseeds = await Post.findAll({
        include: [
          User
        ],
      });
      
      const posts = postseeds.map((post) => post.get({ plain: true }));
 
      res.render('all-posts-admin', { posts, loggedIn: req.session.loggedIn});
    } catch (err) {
      res.status(500).json(err);
    }
  });
  router.get('/post/:id', withAuth, async (req, res) => {
    try {
    
      const postseeds = await Post.findOne({
  
        where: {id: req.params.id},
        include: [
          User,
          {
            model: Comment,
            include: [User],
          },
        ],
      });
 if(postseeds){
      const post = postseeds.get({ plain: true });
      
      console.log(post);
      res.render('single-post', { post, loggedIn: req.session.loggedIn});

    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

        router.get('/signup', (req, res) => {
          if (req.session.loggedIn) {
            res.redirect('/dashboard');
            return;
          }
        
          res.render('signup');
        });

  router.get('/login', (req, res) => {
    
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
    res.render('login');
  });
  module.exports = router;
  