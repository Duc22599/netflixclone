import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  forYou: [],
  lastYear: [],
  action: [],
  movies: [],
  series: [],
};

const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    requesGenres: (state) => {
      state.loading = true;
    },
    requesGenresForYouSucces: (state, action) => {
      state.forYou = action.payload;
      state.loading = false;
    },
    requesGenresLastYearSucces: (state, action) => {
      state.lastYear = action.payload;
      state.loading = false;
    },
    requesGenresActionSucces: (state, action) => {
      state.action = action.payload;
      state.loading = false;
    },
    requesGenresMovieSucces: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
    },
    requesGenresSeriesSucces: (state, action) => {
      state.series = action.payload;
      state.loading = false;
    },
    resquesGenresError: (state) => (state.loading = true),
  },
});

export const {
  requesGenresForYouSucces,
  requesGenresLastYearSucces,
  requesGenresActionSucces,
  requesGenresMovieSucces,
  requesGenresSeriesSucces,
  requesGenres,
} = genresSlice.actions;

export default genresSlice.reducer;
