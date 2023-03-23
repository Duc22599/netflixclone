import { createSlice } from "@reduxjs/toolkit";

const searchMovies = createSlice({
  name: "searchMovie",
  initialState: {
    search: [],
    isLoading: false,
  },
  reducers: {
    searchMovie: (state, action) => {
      state.search = action.payload;
      state.isLoading = false;
    },
    requesSearch: (state) => {
      state.isLoading = true;
    },
  },
});

export const { searchMovie, requesSearch } = searchMovies.actions;

export default searchMovies.reducer;
