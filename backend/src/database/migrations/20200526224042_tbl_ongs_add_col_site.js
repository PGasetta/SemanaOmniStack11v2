exports.up = function(knex) {
    return knex.schema.table('ongs', function (table) {
        table.string('site').notNullable();
      });
  };
  
  exports.down = function(knex) {
    //aqui deu ruim, apagar a tabela
    return knex.schema.dropTable('ongs');
  };
  