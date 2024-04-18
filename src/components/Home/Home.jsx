import { useUser } from '../CustomProviderComponent/CustomProviderComponent';
import css from './Home.module.css';
import { Link } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

export const Home = () => {
   const { myMovies } = useUser();
  
    return (
      <main>
        <span className={css.movieGalleryLabel}>Top Trending Movies</span>

        <div className={css.galleryFrame}>
          <Loader />
          <ul className={css.movieGallery}>
            {myMovies.map(movie => (
              <li key={movie.id} className={css.movieItem}>
                <Link
                  to={`movies/${movie.id}`}
                  name={movie.id}
                  className={css.movieInfo}
                >
                  <img
                    className={css.movieImage}
                    src={
                      'https://image.tmdb.org/t/p/original/' + movie.poster_path
                    }
                    alt="Unavailable"
                  />
                  <span className={css.movieName}>
                    {movie.original_title || movie.original_name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    );
};

export default Home;