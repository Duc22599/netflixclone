import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requesGenres } from "../../store/genresMovieSlice";
import { MovieList } from "../MovieList/movieList";

export const MusicMovies = () => {
  const dispatch = useDispatch();
  const { forYou, lastYear, action, movies, series } = useSelector(
    (state) => state.genresMovies
  );

  useEffect(() => {
    dispatch(requesGenres(10402));
  }, [dispatch]);

  return (
    <Box pt="50px" sx={{ backgroundColor: "black" }}>
      <MovieList movie={action} title="Suggestions For Yor" />
      <MovieList movie={lastYear} title="Released in the Past Year" />
      <MovieList movie={forYou} title="Kids Music" />
      <MovieList movie={movies} title="Music & Concert Documentaries" />
      <MovieList movie={series} title="Musicals" />
    </Box>
  );
};
