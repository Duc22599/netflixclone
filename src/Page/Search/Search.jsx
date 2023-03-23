import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import { SearchMovies } from "../../components/SearchMovies";
import "./index.scss";

export const Search = () => {
  return (
    <div className="containerSearch">
      <SearchMovies />
    </div>
  );
};
