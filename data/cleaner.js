const csv = require("csvtojson");
const csvFilePath = '/Users/polsieira/OneDrive/Documents/Turing/mod-4/projects/byob/data/TEDonly_speakers_final.csv';

csv()
  .fromFile(csvFilePath)
  .then((talks) => {
    return talks.map((talk) => ({
      headline: talk.headline,
      description: talk.description,
      speakers: [
        speaker_1 = {
          name: talk.speaker_1,
          occupation: talk.speaker1_occupation,
          introduction: talk.speaker1_introduction
        },
        speaker_2 = {
          name: talk.speaker_2,
          occupation: talk.speaker2_occupation,
          introduction: talk.speaker2_introduction
        },
        speaker_3 = {
          name: talk.speaker_3,
          occupation: talk.speaker3_occupation,
          introduction: talk.speaker3_introduction
        },
        speaker_4 = {
          name: talk.speaker_4,
          occupation: talk.speaker4_occupation,
          introduction: talk.speaker4_introduction
        }
      ],
      views: talk.views,
      published: talk.published
    })
    )
  })
  .then(cleanData => console.log(cleanData));






