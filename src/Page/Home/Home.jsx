import { Contents } from "../../components/Contents";
import { Feature } from "../../components/Feature/Feature";
import { MovieList } from "../../components/MovieList/movieList";
import { NavBar } from "../../components/NavBar/NavBar";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <Feature />
      <Contents />
    </div>
  );
};
