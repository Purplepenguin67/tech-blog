const router = require('express').Router();

const withAuth = require('../../utils/auth');

const { Post } = require('../../models');


router.put('/:id', withAuth, async (req, res) => {
    try {
      console.log('here is the req.body', req.body);
      const [affectedRows] = await Post.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
  
  router.post('/', withAuth, async (req, res) => {
    const body = req.body;
      console.log(body);
    try {
      const newPost = await Post.create({ ...body, userId: req.session.userId });
      console.log("new post ",  newPost);
      res.json(newPost);
       } catch (err) {
         console.log('failed', err);
      res.status(500).json(err);
    }
  });
  
  
  
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const [affectedRows] = Post.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });


  module.exports = router;
  