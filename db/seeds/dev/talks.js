var talksData = require('../../../data/talkData.json');

exports.seed = function (knex) {

  return knex('speakers').del()
    .then(() => knex('talks').del())
    .then(() => {
      let talkPromises = [];

      talksData.forEach(talk => {
        talkPromises.push(createTalk(knex, talk));
      });

      return Promise.all(talkPromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};

const createTalk = (knex, talk) => {
  return knex('talks').insert({
    headline: talk.headline,
    description: talk.description,
    views: talk.views,
    published: talk.published,
  }, 'id')
    .then(speakerId => {
      let speakerPromises = [];
      console.log(speakerId)
      talk.speakers.forEach(speaker => {
        speakerPromises.push(
          createSpeaker(knex, {
            name: speaker.name,
            occupation: speaker.occupation,
            introduction: speaker.introduction,
            id: speakerId[0]
          })
        )
      });

      return Promise.all(speakerPromises);
    });
};

const createSpeaker = (knex, speaker) => {
  return knex('speakers').insert(speaker);
}
