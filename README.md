# TEDTalks API

This API is a collection of TEDTalk information on different talks and speakers.

Table of contents
=================

<!--ts-->
   * [TEDTalks API](#tedtalks-api)
   * [Table of contents](#table-of-contents)
   * [Setup](#setup)
<!--te-->

## Setup

* Clone down this repo and run `npm install`
* Run the server by using `node server.js` or `nodemon server.js`

The server will run on `http://localhost:3000`. All endpoints are prefixed with `/api/v1`.

## Data Model

A talk stored on the server has an `id`, `headline`, `description`, `views`, `published`. Here is a sample talk object:

```js
{
  id: 1,
  headline: '10 top time-saving tech tips',
  descriptions: 'Tech columnist David Pogue shares 10 simple, clever tips for computer, web, smartphone and camera users. And yes, you may know a few of these already -- but there's probably at least one you don't.',
  views: 4951909,
  published: '4/26/13'
}
```

A speaker stored on the server has an `id`, `name`, `occupation`, `published`, and `talk_id`. Here is a sample speaker object:

```js
{
  id: 1,
  name: 'Nicholas Negroponte',
  occupation: 'Tech visionary',
  introduction: 'The founder of the MIT Media Lab, Nicholas Negroponte pushed the edge of the information revolution as an inventor, thinker and angel investor. He's the driving force behind One Laptop per Child, building computers for children in the developing world.'
  talk_id: 1006
}
```

## Endpoints

| Purpose | URL | Verb | Request Body | Sample Success Response |
|----|----|----|----|----|

