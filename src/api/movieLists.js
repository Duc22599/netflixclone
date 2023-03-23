import { httpAxios } from "../GetApi";

export const keyApi = "e9e9d8da18ae29fc430845952232787c";

const movieTrending = {
  getTrendingDay() {
    const url = `trending/movie/day?api_key=${keyApi}`;
    return httpAxios.get(url);
  },

  getDiscover() {
    const url = `movie/upcoming?api_key=${keyApi}&language=en-US`;
    return httpAxios.get(url);
  },

  getPopular() {
    const url = `/movie/popular?api_key=${keyApi}&language=en-US&`;
    return httpAxios.get(url);
  },
  getTopRated() {
    const url = `movie/top_rated?api_key=${keyApi}&language=en-US`;
    return httpAxios.get(url);
  },
  getComendy() {
    const url = `discover/movie?api_key=${keyApi}&with_genres=35`;
    return httpAxios.get(url);
  },
  getRomance() {
    const url = `discover/movie?api_key=${keyApi}&with_genres=18&primary_release_year=2014`;
    return httpAxios.get(url);
  },
};

export default movieTrending;
