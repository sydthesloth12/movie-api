const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.status(200).send(movies)
}

const getMovieByTitle = (request, response) => {
  const movie = request.params.title
  const foundMovie = movies.includes((movie) => {
    return movie.title === movie
  })

  if (foundMovie) {
    return response.status(200).send(foundMovie)
  } else {
    return response.status(404).send('Movie not found')
  }
}


const getMovieByDirector = () => {

}

const createMovie = (request, response) => {
  const {
    title, directors, releaseDate, rating, runTime, genres
  } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return response.status(400).send('The following data fields are required: title, directors, releaseDate, rating, runTime, genres')
  }

  const newMovie = {
    tile,
    directors,
    releaseDate,
    rating,
    runTime,
    genres
  }

  return response.status(201).send(newMovie)
}

module.exports = {
  getAllMovies,
  getMovieByTitle,
  getMovieByDirector,
  createMovie
}
