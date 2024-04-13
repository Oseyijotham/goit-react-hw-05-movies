import { SharedLayout } from '../SharedLayout/SharedLayout';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Movies } from '../Movies/Movies';
import { MovieDetails } from '../MovieDetails/MovieDetails';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';
import { NotFound } from '../Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
        <Route path="movies/:movieId/cast" element={<Cast />} />
        <Route path="movies/:movieId/reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
