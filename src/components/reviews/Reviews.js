import { useEffect, useState } from 'react';
import { getReviews } from 'api/jsonApi';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movieReviews, setMovieReviews] = useState([]);
  const [isError, setIsError] = useState(false);
  // const [searchParams, setSearchParams] = useSearchParams();
  const { movieId } = useParams();

  // const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    try {
      async function loadMovies() {
        const Reviews = await getReviews(movieId);
        setMovieReviews(Reviews);
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
  console.log(movieReviews);
  if (movieReviews.length === 0) {
    return <p>We don't have any reviews for this movie </p>;
  }
  return (
    <>
      <ul>
        {movieReviews.map(({ id, author, content }) => {
          return (
            <li style={{ margin: '5px 0 0 10px' }} key={`${id}`}>
              <h3> {author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Reviews;
