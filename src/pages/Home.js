import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMovies } from 'api/jsonApi';
import Loader from 'components/loader/Loader';

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [listMovies, setListMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    try {
      async function loadMovies() {
        const loadedMovies = await getMovies();
        setListMovies(loadedMovies);
        setIsLoading(false);
      }
      loadMovies();
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    } finally {
      //   setIsLoading(false);
    }
  }, []);

  //   console.log(listMovies);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return 'Error while loading movies...';
  }

  return (
    <>
      <h1 style={{ marginLeft: '25px' }}>Trending today</h1>
      <div>
        {listMovies.map(({ id, title }) => {
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
export default Home;

// eslint-disable-next-line react-hooks/exhaustive-deps
