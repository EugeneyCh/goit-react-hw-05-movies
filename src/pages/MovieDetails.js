import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import { getMovieDetails } from 'api/jsonApi';
import Loader from 'components/loader/Loader';
import { Outlet } from 'react-router-dom';
import css from './MovieDetails.module.css';

function MovieDetails() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovies] = useState();
  const [isError, setIsError] = useState(false);

  const goBackHandler = () => navigate(location.state.from);

  // console.log('Movies Id is ...', movieId);

  useEffect(() => {
    setIsLoading(true);

    try {
      async function loadMovies() {
        const loadedMovie = await getMovieDetails(movieId);
        setMovies(loadedMovie);
        setIsLoading(false);
        console.log('Movie data is ...', loadedMovie);
      }
      loadMovies(movieId);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    } finally {
      // setIsLoading(false);
    }
  }, []);
  // console.log('Location is ...', location);
  // if (isLoading) {
  //   return <Loader />;
  // }
  if (isError) {
    return 'Error while loading movie information...';
  }
  console.log('Data in movie ...', movie);
  if (!movie) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <>
      <button onClick={goBackHandler}>Go back</button>
      <div className={css.movieAbout}>
        <div>
          <img
            className={css.titleImage}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div style={{ marginLeft: ' 10px' }}>
          <h2>{movie.title}</h2>
          <p>User score:{Math.ceil(movie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <ul className={css.genresList}>
            {movie.genres.map(({ id, name }) => {
              return (
                <li style={{ margin: '5px 0 0 10px' }} key={`${id}`}>
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <ul>
        <li>
          <Link to="cast" state={location}>
            Cast
          </Link>
        </li>
        <li>
          {' '}
          <Link to="reviews" state={location}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default MovieDetails;

// {
//   `${movieId}`;
// }
