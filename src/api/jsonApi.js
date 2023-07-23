import axios from 'axios';

export const getMovies = async () => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/day',
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzBmYzBkOWM5NmViYjdkNjUwZTAyNjMxZTE5NzMzYiIsInN1YiI6IjY0YjRkYTUxMGJiMDc2MDEyZDU4ZDI3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-_cIa2C4PtkjvaCyr-XytEbjzbZCXAq5Fcr0CytEZlY',
    },
  };
  const { data } = await axios.request(options);
  return data.results;
};

export const getMovieDetails = async movieId => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/' + `${movieId}`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzBmYzBkOWM5NmViYjdkNjUwZTAyNjMxZTE5NzMzYiIsInN1YiI6IjY0YjRkYTUxMGJiMDc2MDEyZDU4ZDI3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-_cIa2C4PtkjvaCyr-XytEbjzbZCXAq5Fcr0CytEZlY',
    },
  };
  const { data } = await axios.request(options);
  //   console.log(data);
  return data;
};

export const getSearchMovies = async movieName => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: { query: `${movieName}` },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzBmYzBkOWM5NmViYjdkNjUwZTAyNjMxZTE5NzMzYiIsInN1YiI6IjY0YjRkYTUxMGJiMDc2MDEyZDU4ZDI3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-_cIa2C4PtkjvaCyr-XytEbjzbZCXAq5Fcr0CytEZlY',
    },
  };
  const { data } = await axios.request(options);
  //   console.log(data);
  return data.results;
};

export const getActorsCredit = async movieName => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/' + `${movieName}` + '/credits',
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzBmYzBkOWM5NmViYjdkNjUwZTAyNjMxZTE5NzMzYiIsInN1YiI6IjY0YjRkYTUxMGJiMDc2MDEyZDU4ZDI3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-_cIa2C4PtkjvaCyr-XytEbjzbZCXAq5Fcr0CytEZlY',
    },
  };
  const { data } = await axios.request(options);
  // console.log(data);
  return data.cast;
};

export const getReviews = async movieName => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/' + `${movieName}` + '/reviews',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzBmYzBkOWM5NmViYjdkNjUwZTAyNjMxZTE5NzMzYiIsInN1YiI6IjY0YjRkYTUxMGJiMDc2MDEyZDU4ZDI3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-_cIa2C4PtkjvaCyr-XytEbjzbZCXAq5Fcr0CytEZlY',
    },
  };

  const { data } = await axios.request(options);
  return data.results;
};
