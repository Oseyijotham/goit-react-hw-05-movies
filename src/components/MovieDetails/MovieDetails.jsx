import { useParams } from 'react-router-dom';
import { useUser } from '../CustomProviderComponent/CustomProviderComponent';
import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import svg from '../SharedLayout/icons.svg';
import css from './MovieDetails.module.css';
import { Loader } from '../MovieDetailsLoader/Loader';
import { Suspense } from 'react';


export const MovieDetails = () => {
  const { movieDetails, moviePoster, setFilmDetails, name, filmName } = useUser();
  const { movieId } = useParams();
  useEffect(() => {
    setFilmDetails(movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);
  const imgLink = 'https://image.tmdb.org/t/p/original/' + moviePoster; // I added a link to where the image is hosted
  //const location = useLocation();
  
  //const backLinkHref = location.state?.from.search ?? '/movies';
   

  return (
    <>
      {movieDetails !== '' && moviePoster !== '' ? (
        <div className={css.galleryFrame}>
          <Loader />
          <div className={css.movieDetails}>
            <Link to={`/movies?movie=${filmName}`} className={css.previous}>
              <span className={css.arrowBtn}>
                <svg width="15px" height="15px">
                  <use href={`${svg}#icon-arrow`}></use>
                </svg>
              </span>
            </Link>
            <div className={css.movieFrame}>
              <img src={imgLink} alt="Unavailable" className={css.movieImage} />
              <span className={css.movieName}>{name}</span>
            </div>
            <p className={css.movieOverview}>{movieDetails}</p>
            <ul className={css.movieDetailsList}>
              <li className={css.movieLinksItem}>
                <Link to="cast" className={css.movieLinks}>
                  Cast
                </Link>
              </li>
              <li className={css.movieLinksItem}>
                <Link to="reviews" className={css.movieLinks}>
                  Reviews
                </Link>
              </li>
            </ul>
            <Suspense fallback={<div>Loading page...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      ) : (
        <div>No Details on this Movie, try another movie</div>
      )}
    </>
  );
};

export default MovieDetails;
