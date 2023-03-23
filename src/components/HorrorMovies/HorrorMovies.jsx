import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requesGenres } from "../../store/genresMovieSlice";
import { MovieList } from "../MovieList/movieList";

export const HorrorMovies = () => {
  const dispatch = useDispatch();
  const { forYou, lastYear, action, movies, series } = useSelector(
    (state) => state.genresMovies
  );

  useEffect(() => {
    dispatch(requesGenres(27));
  }, [dispatch]);

  return (
    <Box pt="50px" sx={{ backgroundColor: "black" }}>
      <MovieList movie={forYou} title="Suggestions For Yor" />
      <MovieList movie={lastYear} title="Released in the Past Year" />
      <MovieList movie={action} title="Slasher & Serial Killer Movies" />
      <MovieList movie={movies} title="Supernatural Horror Movies" />
      <MovieList movie={series} title="Teen Screams" />
    </Box>
  );
};
