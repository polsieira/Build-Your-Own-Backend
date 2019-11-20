const express = require('express');
const shortid = require('shortid');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.json());

app.locals.title = 'TEDTalks Data';

app.get('/', (request, response) => {
  response.send('Welcome to TEDTalks Data');
});

app.get('/api/v1/talks', (request, response) => {
  const { talks } = app.locals;

  response.json({ talks });
});

app.get('/api/v1/talks/:id', (request, response) => {
  const { id } = request.params;
  const talk = app.locals.talks.find(talk => talk.Talk_ID === id);
  if (!talk) {
    return response.sendStatus(404);
  }

  response.status(200).json(talk);
});

app.post('/api/v1/talks', (request, response) => {
  let id = `${shortid.generate()}`;
  const { newTalk } = request.body;

  if (!newTalk) { //might add logic to check if data exist
    return response.sendStatus(422);
  }

  app.locals.talks.push({ id, ...newTalk });
  response.status(201).json({ id, ...pet });
});

app.delete('/api/v1/talks/:id', (request, response) => {
  const { id } = request.params;

  let index = app.locals.talks.findIndex(pet => pet.id === id);
  if (!app.locals.talks[index]) {
    return response.sendStatus(404);
  }

  const deletedTalk = app.locals.pets.splice(index, 1);

  response.status(202).json(deletedTalk);
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

