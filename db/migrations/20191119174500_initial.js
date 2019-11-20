exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable('talks', function (table) {
      table.increments('id').primary();
      table.string('headline');
      table.string('description');
      table.integer('speaker1_id').unsigned()
      table.foreign('speaker1_id').references('speakers.id');
      table.integer('speaker2_id').unsigned()
      table.foreign('speaker2_id').references('speakers.id');
      table.integer('speaker3_id').unsigned()
      table.foreign('speaker3_id').references('speakers.id');
      table.integer('speaker4_id').unsigned()
      table.foreign('speaker4_id').references('speakers.id');
      table.integer('views').unsigned();
      table.string('published');

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

