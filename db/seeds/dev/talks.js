var json = require('../../../data/talkData.json');

exports.seed = function (knex) {

  return knex('speakers').del()
    .then(() => knex('talks').del())
    .then(() => {
      return Promise.all([

      ]);
    })
    .then(talks => console.log(talks))
    .catch(error => console.log(`Error seeding data: ${error}`));
};
