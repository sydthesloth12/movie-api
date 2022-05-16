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

module.exports = {
  getAllMovies,
  getMovieByTitle,
  getMovieByDirector
}
