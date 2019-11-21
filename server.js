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

app.post('/api/v1/talks', (request, response) => {
  const talk = request.body;

  for (let requiredParameter of ['headline', 'description', 'views', 'published']) {
    if (!talk[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { headline: <String>, description: <String>, views: <Integer>, published: <String> }. You're missing a "${requiredParameter}" property.` });
    }
  }

  database('talks').insert(talk, 'id')
    .then(talk => {
      response.status(201).json({ id: talk[0] })
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.post('/api/v1/speakers', (request, response) => {
  const speaker = request.body;

  for (let requiredParameter of ['name', 'occupation', 'introduction', 'talk_id']) {
    if (!speaker[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { name: <String>, occupation: <String>, introduction: <String>, talk_id: <Integer> }. You're missing a "${requiredParameter}" property.` });
    }
  }

  database('speakers').insert(speaker, 'id')
    .then(speaker => {
      response.status(201).json({ id: speaker[0] })
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

