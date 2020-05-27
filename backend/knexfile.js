// Update with your config settings.

module.exports = {

  development: {
  /*
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    }
*/
    client: 'mysql',
    version: '8.0',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'pwd2020Docker',
      database : 'bancoDocker'
    },
    migrations:{
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
