import { httpAxios } from "../GetApi";
import { keyApi } from "./movieLists";

export const callSearchMovie = {
  getMovie(keywords) {
    const url = `search/movie?api_key=${keyApi}&include_adult=false&query=${keywords}`;
    return httpAxios.get(url);
  },
};
