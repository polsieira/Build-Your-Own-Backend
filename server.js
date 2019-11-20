const express = require('express');
const shortid = require('shortid');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.json());

app.locals.title = 'TEDTalks Data';

app.get('/', (request, response) => {
  response.send('Welcome to TEDTalks Data');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

