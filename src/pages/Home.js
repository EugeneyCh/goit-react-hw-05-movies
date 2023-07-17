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
      <ul>
        {listMovies.length > 0 &&
          listMovies.map(({ id, title }) => (
            <li key={`movie-item-${id}`}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
export default Home;

// eslint-disable-next-line react-hooks/exhaustive-deps
