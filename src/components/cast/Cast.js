import { useEffect, useState } from 'react';
import { getActorsCredit } from 'api/jsonApi';
import { useParams } from 'react-router-dom';
import Loader from 'components/loader/Loader';
import css from './Cast.module.css';
import PropTypes from 'prop-types';

const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedActors, setLoadedActors] = useState([]);
  const [isError, setIsError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    try {
      async function loadMovies() {
        const loadedActors = await getActorsCredit(movieId);
        setLoadedActors(loadedActors);
        setIsLoading(false);
      }
      loadMovies();
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    } finally {
      //   setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isError) {
    return 'Error while loading casting information...';
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <h1 style={{ marginLeft: '25px' }}>Actors</h1>

      <div>
        <ul className={css.imageGallery}>
          {loadedActors.map(({ id, character, name, profile_path }) => {
            if (profile_path) {
              return (
                <li key={`${id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                    alt={`${name}`}
                    className={css.actorsImg}
                  ></img>
                  <p>{`${name}`}</p>
                  <p>Chapter: {`${character}`}</p>
                </li>
              );
            }
            return null; // Додано повернення null, якщо у актора немає profile_path
          })}
        </ul>
      </div>
    </>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string,
};

export default Cast;
