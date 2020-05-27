const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);
//const connection = knex(configuration.staging);
//const connection = knex(configuration.production);

module.exports = connection;