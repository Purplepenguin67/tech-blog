const { User } = require('../models');

const userseeds = 
[
{
    "username": "Jessica",
    "password": "sunshine23"
},
{
    "username": "Craig",
    "password": "moon123"
},
{
    "username": "Doug",
    "password": "mars123"
},
{
    "username": "Eric",
    "password": "jupiter123"
},
];

const seedUser = () => User.bulkCreate(userseeds, {
    returning: true,
    individualHooks: true,
});

module.exports = seedUser;