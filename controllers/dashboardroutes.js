const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post, User } = require('../models/');

router.get('/edit/:id', withAuth, async (req, res) => {
    try{
        const postData = await Post.findByPK(req.params.id);

        if (postData) {
            const post = postData.get({plain: true});
            
            res.render()


        }

}




















module.exports = router;