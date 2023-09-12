const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'afc97726cd3b4e142bea1138da06bc07';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrendingMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
}
