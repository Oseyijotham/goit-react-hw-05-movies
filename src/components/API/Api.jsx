export async function trendingMovies() {
  return fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTU0MGFlYTM1ZmViOTNmMzZlZjEyZTQ0Mjc2ZDkyMSIsInN1YiI6IjY2MWE0ZTJhNTE0YzRhMDE2MzY2ZDE4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GoYIGVKFRH8QrQCy99ufoxaJxcI8rpAUjpvg-4VUxN8',
    },
  });
}

export async function movieSearchFinder(movie) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTU0MGFlYTM1ZmViOTNmMzZlZjEyZTQ0Mjc2ZDkyMSIsInN1YiI6IjY2MWE0ZTJhNTE0YzRhMDE2MzY2ZDE4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GoYIGVKFRH8QrQCy99ufoxaJxcI8rpAUjpvg-4VUxN8',
      },
    }
  );
}

export async function movieDetailsFinder(movieId) {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTU0MGFlYTM1ZmViOTNmMzZlZjEyZTQ0Mjc2ZDkyMSIsInN1YiI6IjY2MWE0ZTJhNTE0YzRhMDE2MzY2ZDE4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GoYIGVKFRH8QrQCy99ufoxaJxcI8rpAUjpvg-4VUxN8',
    },
  });
}

export async function movieReviewsFinder(movieId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTU0MGFlYTM1ZmViOTNmMzZlZjEyZTQ0Mjc2ZDkyMSIsInN1YiI6IjY2MWE0ZTJhNTE0YzRhMDE2MzY2ZDE4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GoYIGVKFRH8QrQCy99ufoxaJxcI8rpAUjpvg-4VUxN8',
      },
    }
  );
}

export async function movieCastFinder(movieId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&page=1`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTU0MGFlYTM1ZmViOTNmMzZlZjEyZTQ0Mjc2ZDkyMSIsInN1YiI6IjY2MWE0ZTJhNTE0YzRhMDE2MzY2ZDE4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GoYIGVKFRH8QrQCy99ufoxaJxcI8rpAUjpvg-4VUxN8',
      },
    }
  );
}
