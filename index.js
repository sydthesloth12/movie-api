const express = require('express')
const bodyParser = require('body-parser')
const { getAllMovies, getByDirectorTitle, createMovie } = require('./controllers/movie')

const app = express()

app.get('/movies', getAllMovies)

app.get('/movies/:titleOrDirector', getByDirectorTitle)

app.post('/movies', bodyParser.json(), createMovie)

app.listen(1300, () => {
  // eslint-disable-next-line no-console
  console.log('listening @ http://localhost:1300')
})
