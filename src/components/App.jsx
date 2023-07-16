import { Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';
import Home from 'pages/Home';
import Layout from './layout/Layout';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from './cast/Cast';
import Reviews from './reviews/Reviews';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default App;
