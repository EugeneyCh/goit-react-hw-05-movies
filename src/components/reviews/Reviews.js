import { useEffect, useState } from 'react';
import { getReviews } from 'api/jsonApi';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'components/loader/Loader';
import css from './Reviews.module.css';

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movieReviews, setMovieReviews] = useState([]);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(movieReviews);

  if (isError) {
    return 'Error while loading reviews information...';
  }

  if (isLoading) {
    return <Loader />;
  }

  if (movieReviews.length === 0) {
    return <p>We don't have any reviews for this movie </p>;
  }
  return (
    <>
      <ul className={css.reviewsNotes}>
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

Reviews.propTypes = {
  movieId: PropTypes.string,
};

export default Reviews;
