import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requesGenres } from "../../store/genresMovieSlice";
import { MovieList } from "../MovieList/movieList";

export const TvShows = () => {
  const dispatch = useDispatch();
  const { forYou, lastYear, action, movies, series } = useSelector(
    (state) => state.genresMovies
  );

  useEffect(() => {
    dispatch(requesGenres(10751));
  }, [dispatch]);

  return (
    <Box pt="50px" sx={{ backgroundColor: "black" }}>
      <MovieList movie={forYou} title="Suggestions For Yor" />
      <MovieList movie={lastYear} title="Released in the Past Year" />
      <MovieList movie={action} title="Family Comedies" />
      <MovieList movie={movies} title="Kids' TV" />
      <MovieList movie={series} title="Family Adventures" />
    </Box>
  );
};
