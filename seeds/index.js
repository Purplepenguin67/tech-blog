const seedUser = require('./userseeds');
const seedPost = require('./postseeds');
const sequelize = require('../config/config');

const seedAll = async () => {
    await sequelize.sync({ force: true});

    await seedPost();
    await seedUser();

    process.exit(0);

};

seedAll();