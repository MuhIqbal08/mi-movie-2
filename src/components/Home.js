import Navbar from './Navbar';
import { getDetailMovie, getMoviePopular, searchMovie } from '../Api';
// import Introduction from './introduction'
// import Profile from './profile';
// import Footer from './Footer';
// import Button from './Button';
import React, { useState, useEffect, useRef } from 'react';
import Footer from './Footer';

function Home() {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    getMoviePopular().then((result) => {
      setPopularMovie(result);
    });
  }, []);

  const PopularMovies = () => {
    return popularMovie.map((movie, i) => {
      return (
        <div className="card" key={i}>
          <img src={`${process.env.REACT_APP_BASIMGURL}/${movie.poster_path}`} alt={movie.title} />
          <div className="content">
            <h1 className="title">{movie.title}</h1>
            <div className="short-desc">Release Date: {movie.release_date}</div>
            <div className="btn">
              <a href={`/detail/${movie.id}`} className="btn-detail" onClick={async() => await getDetailMovie(movie.id)}>
                Show Detail
              </a>
            </div>
          </div>
        </div>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovie(query.results);
      console.log({ query: query });
    }
  };
    
    // const detailById = async (id) => {
    //   // console.log('Detail ID:', id); // Check if id is received correctly
    //   await getDetailMovie(id);
    //   // console.log(id);
    // };

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
}

export default Home;
