const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.status(200).send(movies)
}

const getByDirectorTitle = (request, response) => {
  const { titleOrDirector } = request.params // Stephen
  const foundMovie = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(titleOrDirector.toLowerCase()) ||
    movie.directors.find((director) => director.toLowerCase().includes(titleOrDirector.toLowerCase()))
  })

  if (foundMovie) {
    return response.status(200).send(foundMovie)
  } else {
    return response.status(404).send('Movie not found')
  }
}


const createMovie = (request, response) => {
  const {
    title, directors, releaseDate, rating, runTime, genres
  } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return response.status(400).send('The following data fields are required: title, directors, releaseDate, rating, runTime, genres')
  }

  const newMovie = {
    title,
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
  getByDirectorTitle,
  createMovie,
}
