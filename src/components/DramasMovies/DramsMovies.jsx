import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requesGenres } from "../../store/genresMovieSlice";
import { MovieList } from "../MovieList/movieList";

export const DramsMovies = () => {
  const dispatch = useDispatch();
  const { forYou, lastYear, action, movies, series } = useSelector(
    (state) => state.genresMovies
  );

  useEffect(() => {
    dispatch(requesGenres(18));
  }, [dispatch]);

  return (
    <Box pt="50px" sx={{ backgroundColor: "black" }}>
      <MovieList movie={forYou} title="Suggestions For Yor" />
      <MovieList movie={lastYear} title="Released in the Past Year" />
      <MovieList movie={action} title="Romatic Dramas" />
      <MovieList movie={movies} title="Family Dramas" />
      <MovieList movie={series} title="Dramas Based on Real Life" />
    </Box>
  );
};
