import { Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';
// import Layout from './layout/Layout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from './cast/Cast';
import Reviews from './reviews/Reviews';

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        {/* </Route> */}
      </Routes>
    </div>
  );
}
export default App;
