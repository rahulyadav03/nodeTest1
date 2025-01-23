// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-complete', 'root', 'root', {
//   dialect: 'mysql',
//   host: 'localhost'
// });

// module.exports = sequelize;


const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'admin', 'node03691', {
  dialect: 'mysql',
  host: 'node-complete.c9qyuy2waf41.us-east-1.rds.amazonaws.com'
});

module.exports = sequelize;
