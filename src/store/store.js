import createSagaMiddleware from "@redux-saga/core";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import genresMovieSlice from "./genresMovieSlice";
import rootSaga from "./rootSaga";
import searchMovie from "./searchSlice";

const SagaMiddleware = createSagaMiddleware();

const initialState = {
  movieTrending: [],
  loadingMovie: false,
  movieDiscover: [],
  moviePopular: [],
  movieToprated: [],
  movieComedy: [],
  movieRomance: [],
};

const movieTrendingSlice = createSlice({
  name: "movieTrending",
  initialState,
  reducers: {
    requestMovie: (state) => {
      state.loadingMovie = true;
    },
    requestMovieSucces: (state, action) => {
      state.loadingMovie = false;
      state.movieTrending = action.payload;
    },
    requestMovieDiscoverSucces: (state, action) => {
      state.loadingMovie = false;
      state.movieDiscover = action.payload;
    },
    requestMoviePopularrSucces: (state, action) => {
      state.loadingMovie = false;
      state.moviePopular = action.payload;
    },
    requestMovieTopratedSucces: (state, action) => {
      state.loadingMovie = false;
      state.movieToprated = action.payload;
    },
    requestMovieComedySucces: (state, action) => {
      state.loadingMovie = false;
      state.movieComedy = action.payload;
    },
    requestRomanceSucces: (state, action) => {
      state.loadingMovie = false;
      state.movieRomance = action.payload;
    },
  },
});

export const {
  requestMovie,
  requestMovieSucces,
  requestMovieDiscoverSucces,
  requestMoviePopularrSucces,
  requestMovieTopratedSucces,
  requestMovieComedySucces,
  requestRomanceSucces,
} = movieTrendingSlice.actions;

const store = configureStore({
  reducer: {
    infoMovie: movieTrendingSlice.reducer,
    searchMovies: searchMovie,
    genresMovies: genresMovieSlice,
  },
  middleware: [SagaMiddleware],
});

SagaMiddleware.run(rootSaga);

export default store;
