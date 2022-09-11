const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post, User } = require('../models/');

router.get('/', withAuth, async (req, res) => {
    try{
        const postseeds = await Post.findAll({
            where:{"userId": req.session.userId},
            include: [User]
        });
        router.get('/edit/:id', withAuth, async (req, res) => {
            try{
                const postseeds = await Post.findByPk(req.params.id);
                if (postseeds) {
                    const post = postseeds.get({ plain: true });
                    console.log(post);
                    res.render('edit-post', {
                        layout: 'dashboard',
                        post,
                    });

              router.get('/new', withAuth, (req, res) => {
                  res.render('new-post', {
                      layout: ' dashboard',
                  });
                });

                const posts = postseeds.map((post) => post.get({ plain: true}));
                console.log(posts);
                res.render('all-posts', {
                    layout: 'dashboard',
                    posts,
                });
            } catch (err) {
                res.redirect('login');
            }
        });

    else {
        res.status(404).end();
    }
    catch (error) {
    res.redirect('login');
}
);

module.exports = router;

















module.exports = router;