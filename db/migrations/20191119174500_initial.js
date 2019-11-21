
exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable('talks', function (table) {
      table.increments('id').primary();
      table.string('headline');
      table.text('description');
      table.integer('views').unsigned();
      table.string('published');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('speakers', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.string('occupation');
      table.text('introduction');
      table.integer('talk_id').unsigned();
      table.foreign('talk_id').references('talks.id')

      table.timestamps(true, true);
    })
  ])
};


exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable('speakers'),
    knex.schema.dropTable('talks')
  ]);
};

