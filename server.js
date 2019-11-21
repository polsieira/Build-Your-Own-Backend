const express = require('express');
const app = express();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3000);
app.use(express.json());

app.locals.title = 'TEDTalks Data Server';

app.get('/', (request, response) => {
  response.send(`Welcome to ${app.locals.title}`);
});

app.get('/api/v1/talks', (request, response) => {
  database('talks').select()
    .then((talks) => {
      response.status(200).json(talks);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

app.get('/api/v1/speakers', (request, response) => {
  database('speakers').select()
    .then((speakers) => {
      response.status(200).json(speakers);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

app.get('/api/v1/talks/:id', (request, response) => {
  const { id } = request.params;
  database('talks').select()
    .then((talks) => {
      const talk = talks.find(talk => talk.id === parseInt(id))
      response.status(200).json(talk);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

app.get('/api/v1/speakers/id/:id', (request, response) => {
  const { id } = request.params;
  database('speakers').select()
    .then((speakers) => {
      const speaker = speakers.find(speaker => speaker.id === parseInt(id))
      response.status(200).json(speaker);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

app.get('/api/v1/speakers/name/:name', (request, response) => {
  let { name } = request.params;
  name = name.replace(/-/g, ' ');
  database('speakers').select()
    .then((speakers) => {
      const speaker = speakers.find(speaker => {
        return speaker.name === name
      })
      response.status(200).json(speaker);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

