exports.seed = function (knex) {

  return knex('speakers').del()
    .then(() => knex('talks').del())
    .then(() => {
      return Promise.all([

      ]);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
