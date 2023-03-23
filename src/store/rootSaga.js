import {
  call,
  put,
  takeEvery,
  all,
  takeLatest,
  fork,
  join,
} from "redux-saga/effects";
import movieTrending from "../api/movieLists";
import { callSearchMovie } from "../api/searchMovies";
import { watchRequesGenres } from "./sagaGenres";
import { requesSearch, searchMovie } from "./searchSlice";
import {
  requestMovie,
  requestMovieComedySucces,
  requestMovieDiscoverSucces,
  requestMoviePopularrSucces,
  requestMovieSucces,
  requestMovieTopratedSucces,
  requestRomanceSucces,
} from "./store";

function* ApiMovie() {
  try {
    // const [
    //   movieTrenDing,
    //   movieDiscover,
    //   moviePopular,
    //   movieToprated,
    //   movieComedy,
    //   movieRomance,
    // ] = yield all([
    //   call(movieTrending.getTrendingDay),
    //   call(movieTrending.getDiscover),
    //   call(movieTrending.getPopular),
    //   call(movieTrending.getTopRated),
    //   call(movieTrending.getComendy),
    //   call(movieTrending.getRomance),
    // ]);
    // yield put(requestMovieSucces(movieTrenDing.data.results));
    // yield put(requestMovieDiscoverSucces(movieDiscover.data.results));
    // yield put(requestMoviePopularrSucces(moviePopular.data.results));
    // yield put(requestMovieTopratedSucces(movieToprated.data.results));
    // yield put(requestMovieComedySucces(movieComedy.data.results));
    // yield put(requestRomanceSucces(movieRomance.data.results));

    const callTrending = yield fork(movieTrending.getTrendingDay);
    const callDiscover = yield fork(movieTrending.getDiscover);
    const callPopular = yield fork(movieTrending.getPopular);
    const callToprate = yield fork(movieTrending.getTopRated);
    const callComedy = yield fork(movieTrending.getComendy);
    const callRomance = yield fork(movieTrending.getRomance);

    const [
      dataTrending,
      dataDiscover,
      dataPopular,
      dataToprate,
      dataComedy,
      dataRomance,
    ] = yield join([
      callTrending,
      callDiscover,
      callPopular,
      callToprate,
      callRomance,
      callComedy,
    ]);

    yield put(requestMovieSucces(dataTrending.data.results));
    yield put(requestMovieDiscoverSucces(dataDiscover.data.results));
    yield put(requestMoviePopularrSucces(dataPopular.data.results));
    yield put(requestMovieTopratedSucces(dataToprate.data.results));
    yield put(requestMovieComedySucces(dataComedy.data.results));
    yield put(requestRomanceSucces(dataRomance.data.results));
  } catch (erro) {
    yield console.log(erro);
  }
}

function* watchReques() {
  yield takeEvery(requestMovie, ApiMovie);
}

function* ApiSearch(action) {
  const search = yield call(callSearchMovie.getMovie, action.payload);
  yield put(searchMovie(search.data.results));
}

function* watchRequesSearch() {
  yield takeLatest(requesSearch, ApiSearch);
}

function* rootSaga() {
  yield all([watchReques(), watchRequesSearch(), watchRequesGenres()]);
}

export default rootSaga;
