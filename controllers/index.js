const router = require('express').Router();
const homeRoutes = require('./homerouters.js');
const apiRoutes = require('./api');

const dashboardRoutes = require('./dashboardroutes.js');

router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;