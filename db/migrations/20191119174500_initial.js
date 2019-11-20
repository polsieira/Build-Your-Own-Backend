
<<<<<<< HEAD
exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable('talks', function (table) {
      table.increments('id').primary();
      table.string('headline');
      table.string('speaker1_id')
        .unsigned()
        .references('speakers.id');
      table.string('speaker2_id')
        .unsigned()
        .references('speakers.id')
      table.string('speaker3_id')
        .unsigned()
        .references('speakers.id');
      table.string('speaker4_id')
        .unsigned()
        .references('speakers.id');
      table.date('publish_date')

      table.timestamps(true, true);
    }),

    knex.schema.createTable('speakers', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.string('occupation');
      table.string('introduction');

      table.timestamps(true, true);
    })
  ])
};


exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable('talks'),
    knex.schema.dropTable('speakers')
  ]);
};
=======
exports.up = function(knex) {
  
};

exports.down = function(knex) {
  
};
>>>>>>> 857cc82f08704a3f78102a662115dda3c4a6d0fb
