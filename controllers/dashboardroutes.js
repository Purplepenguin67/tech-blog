const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post, User } = require('../models/');

router.get('/', withAuth, async (req, res) => {
    try{
        const postseeds = await Post.findByPK(req.params.id);

        if (postData) {
            const post = postseeds.get({plain: true});
            
            res.render()


        }

}




















module.exports = router;