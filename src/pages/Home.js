import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMovies } from 'api/jsonApi';
import Loader from 'components/loader/Loader';

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [listMovies, setListMovies] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    async function loadMovies() {
      const loadedMovies = await getMovies();
      setListMovies(loadedMovies);
      setIsLoading(false);
    }
    loadMovies();
  }, []);

  console.log(listMovies);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <h1 style={{ marginLeft: '25px' }}>Trending today</h1>
      <div>
        {listMovies.map(({ id, title }) => {
          return (
            <li style={{ margin: '5px 0 0 10px' }} key={`${id}`}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          );
        })}
      </div>
    </>
  );
}
export default Home;

// eslint-disable-next-line react-hooks/exhaustive-deps
