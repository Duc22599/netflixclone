import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requesGenres } from "../../store/genresMovieSlice";
import { MovieList } from "../MovieList/movieList";

export const CrimeMovies = () => {
  const dispatch = useDispatch();
  const { forYou, lastYear, action, movies, series } = useSelector(
    (state) => state.genresMovies
  );

  useEffect(() => {
    dispatch(requesGenres(80));
  }, [dispatch]);

  return (
    <Box pt="50px" sx={{ backgroundColor: "black" }}>
      <MovieList movie={forYou} title="Suggestions For Yor" />
      <MovieList movie={lastYear} title="Released in the Past Year" />
      <MovieList movie={action} title="Crime Action & Adventure" />
      <MovieList movie={movies} title="Crime Comedies" />
      <MovieList movie={series} title="Crime Dramas" />
    </Box>
  );
};
