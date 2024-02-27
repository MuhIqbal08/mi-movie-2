// import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect, useRef } from 'react';
// import { useEffect, useState } from 'react';
// import { getMoviePopular, getTopRated, searchMovie } from './Api';
import Navbar from './Navbar';
import { getDetailMovie } from '../Api';
import { useParams } from 'react-router-dom';
import Footer from './Footer';

const DetailMovie = () => {
  const { id } = useParams();
  const [detailMovie, setDetailMovie] = useState([]);

  useEffect(() => {
    getDetailMovie(id).then((result) => {
      setDetailMovie(result);
    });
  }, [id]);

  // const DetailMovies = () => {
  //   return detailMovie.map((movie, i) => {
  //     const heroStyle = {
  //       content: '',
  //       width: '100%',
  //       height: '100%',
  //       position: 'absolute',
  //       overflow: 'hidden',
  //       top: 0,
  //       left: 0,
  //       background: `red url(${movie.backdrop_path})`, // Gabungkan dengan red sebagai fallback
  //       zIndex: -1,
  //       transform: 'skewY(-2.2deg)',
  //       transformOrigin: '0 0',
  //       WebkitBackfaceVisibility: 'hidden', // Prefiks vendor harus diubah menjadi camelCase
  //     };
  //     return (
  //       <div className="detail-container" key={i}>
  //         <a href="#">
  //           <img src={movie.poster_path} alt="cover" class="cover" />
  //         </a>
  //         <div class="hero" style={heroStyle}>
  //           <div className="details">
  //             <div className="d-title1">{movie.title}</div>
  //             <div className="detail-info">
  //               <FontAwesomeIcon icon={faStar} style={{ color: '#ffc800' }} /> | {movie.vote_average} Rating
  //               <span class="likes">{movie.count} likes</span>
  //             </div>
  //           </div>
  //         </div>

  //         <div className="colomn1">
  //           <span className="tag">Adventure</span>
  //         </div>
  //         <div className="description">
  //           <div className="colomn2">
  //             <p>{movie.overview}</p>

  //             <a href="" className="btn-link">
  //               Show Detail
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   });
  // };

  // const heroStyle = {
  //   content: '',
  //   width: '100%',
  //   height: '100%',
  //   position: 'absolute',
  //   overflow: 'hidden',
  //   top: 0,
  //   left: 0,
  //   background: `url(${process.env.REACT_APP_BASIMGURL}/${detailMovie.backdrop_path})`, // Gabungkan dengan red sebagai fallback
  //   zIndex: -1,
  //   transform: 'skewY(-2.2deg)',
  //   transformOrigin: '0 0',
  //   WebkitBackfaceVisibility: 'hidden', // Prefiks vendor harus diubah menjadi camelCase
  // };
  return (
    <div className="container">
      <Navbar />
      <div className="detail-container">
        <a href="#">
          <img src={`${process.env.REACT_APP_BASIMGURL}/${detailMovie.poster_path}`} alt="cover" class="cover" />
        </a>
        <div
          className="hero"
          style={{
            backgroundImage: `url(${process.env.REACT_APP_BASIMGURL}/${detailMovie.backdrop_path})`,
            // transform: 'skewY(-2.2deg)',
            transformOrigin: '0 0',
            WebkitBackfaceVisibility: 'hidden',
            position: 'relative', // Menambahkan position: relative agar pseudo-element tetap terkait
            zIndex: 0, // Mengatur zIndex untuk latar belakang agar tidak tertutup oleh konten lain
          }}
        >
          <div className="details">
            <div className="d-title1">{detailMovie.title}</div>
            <div className="detail-info">
              <FontAwesomeIcon icon={faStar} style={{ color: '#ffc800' }} /> | {detailMovie.vote_average} Rating
              <span class="likes">{detailMovie.vote_count} likes</span>
            </div>
          </div>
        </div>

        <div className="colomn1">
          {detailMovie.genres &&
            detailMovie.genres.map((genre) => (
              <span key={genre.id} className="tag">
                {genre.name}
              </span>
            ))}
        </div>
        <div className="description">
          <div className="colomn2">
            <p>{detailMovie.overview}</p>

            <a href={`/`} className="btn-link">
              Homepage
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailMovie;
