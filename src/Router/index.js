import { createBrowserRouter, Navigate } from "react-router-dom";
import { AnimeMovies } from "../components/AnimeMovie/AnimeMovies";
import { CrimeMovies } from "../components/CrimeMovies/CrimeMovies";
import { DramsMovies } from "../components/DramasMovies/DramsMovies";
import { HorrorMovies } from "../components/HorrorMovies/HorrorMovies";
import { Layout } from "../components/Layout/Layout";
import { Login } from "../components/Login/Login";
import { MovieDetails } from "../components/MovieDetails/MovieDetails";
import { MusicMovies } from "../components/MusicMovies/MusicMovies";
import { PrivateRouter } from "../components/PrivateRouter/PrivateRouter";
import { RomaticMovies } from "../components/RomaticMovies/RomaticMovies";
import { SignIn } from "../components/Signin/SignIn";
import { TvShows } from "../components/TvShows/TvShows";
import { Home } from "../Page/Home/Home";
import { Search } from "../Page/Search/Search";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <SignIn />,
  },
  {
    path: "home",
    element: (
      <PrivateRouter>
        <Layout>
          <Home />
        </Layout>
      </PrivateRouter>
    ),
    children: [
      {
        path: "movie/:id/:title",
        element: <MovieDetails />,
      },
    ],
  },
  {
    path: "/search",
    element: (
      <PrivateRouter>
        <Layout>
          <Search />
        </Layout>
      </PrivateRouter>
    ),
    children: [
      {
        path: ":id/:title",
        element: <MovieDetails />,
      },
    ],
  },
  {
    path: "/genre/anime",
    element: (
      <PrivateRouter>
        <Layout>
          <AnimeMovies />
        </Layout>
      </PrivateRouter>
    ),
    children: [
      {
        path: "movie/:id/:title",
        element: <MovieDetails />,
      },
    ],
  },
  {
    path: "/genre/crime",
    element: (
      <PrivateRouter>
        <Layout>
          <CrimeMovies />
        </Layout>
      </PrivateRouter>
    ),
    children: [
      {
        path: "movie/:id/:title",
        element: <MovieDetails />,
      },
    ],
  },
  {
    path: "/genre/dramas",
    element: (
      <PrivateRouter>
        <Layout>
          <DramsMovies />
        </Layout>
      </PrivateRouter>
    ),
    children: [
      {
        path: "movie/:id/:title",
        element: <MovieDetails />,
      },
    ],
  },
  {
    path: "/genre/music",
    element: (
      <PrivateRouter>
        <Layout>
          <MusicMovies />
        </Layout>
      </PrivateRouter>
    ),
    children: [
      {
        path: "movie/:id/:title",
        element: <MovieDetails />,
      },
    ],
  },
  {
    path: "/genre/romantic",
    element: (
      <PrivateRouter>
        <Layout>
          <RomaticMovies />
        </Layout>
      </PrivateRouter>
    ),
    children: [
      {
        path: "movie/:id/:title",
        element: <MovieDetails />,
      },
    ],
  },
  {
    path: "/genre/horror",
    element: (
      <PrivateRouter>
        <Layout>
          <HorrorMovies />
        </Layout>
      </PrivateRouter>
    ),
    children: [
      {
        path: "movie/:id/:title",
        element: <MovieDetails />,
      },
    ],
  },
  {
    path: "/genre/tvshow",
    element: (
      <PrivateRouter>
        <Layout>
          <TvShows />
        </Layout>
      </PrivateRouter>
    ),
    children: [
      {
        path: "movie/:id/:title",
        element: <MovieDetails />,
      },
    ],
  },
]);

export default routes;
