import { useEffect, useState } from 'react';
import { getActorsCredit } from 'api/jsonApi';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedActors, setLoadedActors] = useState([]);
  const [isError, setIsError] = useState(false);
  // const [searchParams, setSearchParams] = useSearchParams();
  const { movieId } = useParams();

  // const location = useLocation();

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
  }, []);
  console.log('About actors...', loadedActors);
  return (
    <>
      <h1 style={{ marginLeft: '25px' }}>Actors</h1>

      <div>
        <ul className={css.imageGallery}>
          {loadedActors.map(({ id, character, name, profile_path }) => {
            if (profile_path) {
              return (
                <li key={`${id}`}>
                  {/* <h3> {author}</h3> */}
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
          })}
        </ul>
      </div>
      {/* <div>
        {loadedActors.map(({ id,character, name , profile_path}) => {
          return (
            <li key={id}>
              <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={`${name}`} className="">
              Chapter: {`${character}`}
            </li>
          );
        })}
      </div> */}
    </>
  );
};
export default Cast;
