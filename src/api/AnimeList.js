import { httpAxios } from "../GetApi";
import { keyApi } from "./movieLists";

const animeMovie = {
  getAnimePageOne(number) {
    const url = `discover/movie?api_key=${keyApi}&page=1&with_genres=${number}`;
    return httpAxios(url);
  },
  getAnimePageTwo(number) {
    const url = `discover/movie?api_key=${keyApi}&page=2&with_genres=${number}`;
    return httpAxios(url);
  },
  getAnimePageThree(number) {
    const url = `discover/movie?api_key=${keyApi}&page=3&with_genres=${number}`;
    return httpAxios(url);
  },
  getAnimePageFour(number) {
    const url = `discover/movie?api_key=${keyApi}&page=4&with_genres=${number}`;
    return httpAxios(url);
  },
  getAnimePageFive(number) {
    const url = `discover/movie?api_key=${keyApi}&page=5&with_genres=${number}`;
    return httpAxios(url);
  },
};

export default animeMovie;
