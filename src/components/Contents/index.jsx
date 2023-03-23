import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requesSearch } from "../../store/searchSlice";
import { requestMovie } from "../../store/store";
import { MovieList } from "../MovieList/movieList";

export const Contents = () => {
  const dispatch = useDispatch();
  const {
    movieTrending,
    movieDiscover,
    moviePopular,
    movieToprated,
    movieComedy,
    movieRomance,
  } = useSelector((state) => state.infoMovie);

  useEffect(() => {
    dispatch(requestMovie());
  }, [dispatch]);

  return (
    <div>
      <MovieList
        movie={movieDiscover}
        title="Netflix Orignals"
        isNetflix={true}
      />
      <MovieList movie={movieTrending} title="Trending Movies" />
      <MovieList movie={moviePopular} title="Popular Movies" />
      <MovieList movie={movieToprated} title="Top Rated Movies" />
      <MovieList movie={movieComedy} title="Comedy Movies" />
      <MovieList movie={movieRomance} title="Action Movies" />
    </div>
  );
};
