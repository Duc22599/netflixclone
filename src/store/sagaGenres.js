import { fork, join, put, takeEvery } from "@redux-saga/core/effects";
import animeMovie from "../api/AnimeList";
import {
  requesGenres,
  requesGenresActionSucces,
  requesGenresForYouSucces,
  requesGenresLastYearSucces,
  requesGenresMovieSucces,
  requesGenresSeriesSucces,
} from "./genresMovieSlice";

function* callApiGenres(action) {
  try {
    const callForYou = yield fork(animeMovie.getAnimePageOne, action.payload);
    const callLastYear = yield fork(animeMovie.getAnimePageTwo, action.payload);
    const callAction = yield fork(animeMovie.getAnimePageThree, action.payload);
    const callMovies = yield fork(animeMovie.getAnimePageFour, action.payload);
    const callSeries = yield fork(animeMovie.getAnimePageFive, action.payload);

    const [dataForYou, dataLastYear, dataActions, dataMovies, dataSeries] =
      yield join([
        callForYou,
        callLastYear,
        callAction,
        callMovies,
        callSeries,
      ]);

    yield put(requesGenresForYouSucces(dataForYou.data.results));
    yield put(requesGenresLastYearSucces(dataLastYear.data.results));
    yield put(requesGenresActionSucces(dataActions.data.results));
    yield put(requesGenresMovieSucces(dataMovies.data.results));
    yield put(requesGenresSeriesSucces(dataSeries.data.results));
  } catch (error) {
    yield console.log(error);
  }
}

export function* watchRequesGenres() {
  yield takeEvery(requesGenres, callApiGenres);
}
