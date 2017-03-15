'use strict';

var Sequelize = require('Sequelize');

var sequelize = new Sequelize('backands148754424wgfimxv2', 'ihann0syfqqekwz', 'aOfLAEu63bq0f6VND48jVe', {
  host: 'bk-prod-us1.cd2junihlkms.us-east-1.rds.amazonaws.com',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});
