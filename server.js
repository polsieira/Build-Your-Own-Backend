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

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

