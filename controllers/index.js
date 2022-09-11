const router = require('express').Router();

const homeRoutes = require('./homerouters.js');

const apiRoutes = require('./api');

const dashboardRoutes = require('./dashboardroutes.js');


router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);



module.exports = router;