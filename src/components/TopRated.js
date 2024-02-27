import '../App.css';
import { useEffect, useState } from 'react';
import { getTopRated, searchMovie, getDetailMovie } from '../Api'; // Import getDetailMovie
import Navbar from './Navbar';
import Footer from './Footer';

const TopRated = () => {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    getTopRated().then((result) => {
      setPopularMovie(result);
    });
  }, []);

  const PopularMovies = () => {
    return popularMovie.map((movie, i) => (
      <div className="card" key={i}>
        <img src={`${process.env.REACT_APP_BASIMGURL}/${movie.poster_path}`} alt={movie.title} />
        <div className="content">
          <h1 className="title">{movie.title}</h1>
          {/* <h3 className="info">
            <FontAwesomeIcon icon={faStar} style={{ color: '#ffc800' }} /> | {movie.vote_average} Rating
          </h3> */}
          <div className="short-desc">Release Date: {movie.release_date}</div>
          <div className="btn">
            <a href={`/detail/${movie.id}`} className="btn-detail" onClick={async () => await getDetailMovie(movie.id)}>
              Show Detail
            </a>
          </div>
        </div>
      </div>
    ));
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovie(query.results);
      console.log({ query: query });
    }
  };


  return (
    <div className="container">
      <Navbar />
      <main>
        <div className="search">
          <input type="text" placeholder="Cari Movie Kesukaan Anda!" className="search-input" onChange={({ target }) => search(target.value)} />
        </div>
        <div className="movies">
          <div className="movie-cards">
            <PopularMovies />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TopRated;
