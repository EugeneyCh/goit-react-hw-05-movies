import { Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';
import Layout from './layout/Layout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from './cast/Cast';
import Reviews from './reviews/Reviews';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;

// Ключ API
// 330fc0d9c96ebb7d650e02631e19733b

// Токен доступу для читання API
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzBmYzBkOWM5NmViYjdkNjUwZTAyNjMxZTE5NzMzYiIsInN1YiI6IjY0YjRkYTUxMGJiMDc2MDEyZDU4ZDI3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-_cIa2C4PtkjvaCyr-XytEbjzbZCXAq5Fcr0CytEZlY
