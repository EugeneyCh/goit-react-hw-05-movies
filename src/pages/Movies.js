import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { getSearchMovies } from 'api/jsonApi';
import Loader from 'components/loader/Loader';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName');
  const [searchName, setSearchName] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [listMovies, setListMovies] = useState();
  const [isError, setIsError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setSearchName();
  }, []);

  useEffect(() => {
    if (searchName === '') {
      return;
    }
    setIsLoading(true);
    try {
      async function loadMovies() {
        setIsLoading(true);
        const loadedSearchMovies = await getSearchMovies(movieName);
        setListMovies(loadedSearchMovies);
        setIsLoading(false);
      }
      if (movieName) {
        loadMovies();
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchName]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchName(movieName);
  };

  if (isError) {
    return 'Error while loading movies...';
  }
  // console.log(listMovies);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          style={{ marginLeft: '25px' }}
          type="text"
          value={movieName}
          onChange={e => setSearchParams({ movieName: e.target.value })}
        />
        <button type="submit">Search</button>
      </form>
      {isLoading && <Loader />}
      <div>
        {listMovies &&
          listMovies.map(({ id, title }) => {
            return (
              <li style={{ margin: '5px 0 0 10px' }} key={`${id}`}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
      </div>
    </>
  );
}
export default Movies;
