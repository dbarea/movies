import * as genresAPI from "./fakeGenreService";
import axios from 'axios';

export async function getMovies() {
  const items = await axios.get('http://localhost:3001/movies')
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
  axios.delete("http://localhost:3001/movie/" + id);
}
