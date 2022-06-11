import * as genresAPI from "./fakeGenreService";
import axios from 'axios';

// back_host = 'localhost'
// back_port = '3002'

export async function getMovies() {
//  const items = await axios.get('http://' + back_host + ':' + back_port + '/movies')
//  const items = await axios.get('http://172.17.0.1:3002/movies')
  const items = await axios.get('http://localhost:3002/movies')
return items.data;
}

export function getMovie(id) {
//  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
/*   let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now();
    movies.push(movieInDb);
  }

  return movieInDb;
 */}

export function deleteMovie(id) {
//  axios.delete('http://' + back_host + ':' + back_port + '/movie/' + id);
  axios.delete('http://localhost:3003/movie/' + id);
}
