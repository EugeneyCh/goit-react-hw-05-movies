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

  //   const { data } = await axios.request(options);
  try {
    const { data } = await axios.request(options);
    return data.results;
  } catch (error) {
    console.error(error);
  } finally {
  }
  //   return data.results;
};

//   try {
//     const { data } = await axios.request(options).then(function (response) {
//       return data.result;
//     });
//   } catch (error) {
//     console.error(error);
//   } finally {
//   }
// };

// import axios from 'axios';

// const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/trending/movie/day',
//   params: { language: 'en-US' },
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzBmYzBkOWM5NmViYjdkNjUwZTAyNjMxZTE5NzMzYiIsInN1YiI6IjY0YjRkYTUxMGJiMDc2MDEyZDU4ZDI3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-_cIa2C4PtkjvaCyr-XytEbjzbZCXAq5Fcr0CytEZlY',
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
