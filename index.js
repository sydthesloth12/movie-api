const express = require('express')
const bodyparser = require('body-parser')
const { getAllMovies, getMovieByTitle, getMovieByDirector } = require('./controllers/movie')

const app = express()

app.get('/movies', getAllMovies)

app.get('/movies/:title', getMovieByTitle)

app.get('/movies/:director', getMovieByDirector)

app.listen(1300, () => {
  // eslint-disable-next-line no-console
  console.log('listening @ http://localhost:1300')
})
