const { User } = require('../../models');
const router = require('express');

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                username: req.body.username,
            },
        });
        if (!user) {
            res.status(400).json({ message: 'no account found'});
            return; 
        }
        const validPassword = user.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'no account found' });
            return;
        }

        req.session.save(() => {
            req.session.userId = user.id;
            req.session.loggedIn = true;
            req.session.username = user.username;
            res.json({ user, message: 'logged in'});
        });
    } catch (error) {
        res.status(400).json({ message: 'account not found'});
    }
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) => {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else { 
        res.status(404).end();
    }
});

router.post('/', async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            password: req.body. password});
            req.session.save(() => {
                req.session.userId = newUser.id;
                req.session.username = newUser.username;
                req.session.username = newUser.username;
                req.session.loggedIn = true;
                res.json(newUser);
            });
        } catch (error) {res.status(500).json(error);}});

        module.exports = router;