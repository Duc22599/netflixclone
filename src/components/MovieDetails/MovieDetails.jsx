import { VolumeOff, VolumeUp } from "@mui/icons-material";
import { Box, styled, Typography } from "@mui/material";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { keyApi } from "../../api/movieLists";
import { httpAxios } from "../../GetApi";
import "./movieDetails.scss";

export const MovieDetails = () => {
  const [mutedd, setMutedd] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);
  const [movieTrailer, setMovieTrailer] = useState([]);
  const [hours, setHours] = useState(0);
  const [remainingMinutes, setRemainingMinutes] = useState(0);
  const { id, title } = useParams();

  const infoDetail = () => {
    httpAxios
      .get(`movie/${id}-${title}?api_key=${keyApi}`)
      .then((res) => {
        setMovieDetail(res.data);
        setHours(Math.floor(res.data.runtime / 60));
        setRemainingMinutes(res.data.runtime % 60);
      })
      .catch((erro) => erro);
  };

  const videoTrailer = () => {
    httpAxios
      .get(`movie/${id}/videos?api_key=${keyApi}`)
      .then((res) => setMovieTrailer(res.data.results[0]))
      .catch((erro) => erro);
  };

  useEffect(() => {
    infoDetail();
    videoTrailer();
  }, [id, title]);

  return (
    <Style className="containerDetails">
      {movieTrailer ? (
        <>
          <ReactPlayer
            className="videoTrailer"
            loop={true}
            width="100%"
            height="56%"
            url={`https://www.youtube.com/embed/${movieTrailer.key}`}
            // playing={true}
            volume={1}
            muted={mutedd}
            controls
          />
        </>
      ) : (
        <>
          <img
            width="100%"
            height="60%"
            src={
              movieDetail.backdrop_path !== null
                ? `https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`
                : `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`
            }
            alt=""
          />
        </>
      )}

      <BoxCustom>
        <Typography
          id="modal-modal-title"
          variant="h4"
          component="h2"
          fontWeight="600"
          mt={1}
          sx={{ fontSize: { xs: "25px" } }}
        >
          {movieDetail.title}
        </Typography>

        <Box mt={1.5}>
          <Typography
            variant="subtitle1"
            component="span"
            mr={2}
            sx={{ fontSize: { xs: "18px", md: "20px" } }}
          >
            Release date: {moment(movieDetail.release_date).format("L")}
          </Typography>
          <Typography
            variant="subtitle1"
            component="span"
            sx={{ fontSize: { xs: "18px", md: "20px" } }}
          >
            {`${hours}h ${remainingMinutes}m`}
          </Typography>
        </Box>

        <Typography id="modal-modal-title" variant="p" component="p" mb={2}>
          <Typography
            variant="p"
            component="span"
            color="green"
            sx={{ fontSize: { xs: "18px", md: "20px" } }}
            fontWeight="600"
          >
            Rating: {Math.round(movieDetail.vote_average * 10)}%
          </Typography>
          <Typography
            variant="p"
            component="span"
            ml={2}
            color="yellow"
            sx={{ fontSize: { xs: "18px", md: "20px" } }}
            fontWeight="600"
          >
            Popularity: {movieDetail.popularity}
          </Typography>
        </Typography>

        <Typography pb={5} id="modal-modal-description">
          {movieDetail.overview}
        </Typography>
      </BoxCustom>

      {movieTrailer && (
        <>
          {mutedd ? (
            <VolumeOff className="btn-vol" onClick={() => setMutedd(!mutedd)} />
          ) : (
            <VolumeUp className="btn-vol" onClick={() => setMutedd(!mutedd)} />
          )}
        </>
      )}
    </Style>
  );
};

const Style = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "rgb(27, 25, 25)",
  color: "white",
  boxShadow: 24,

  [theme.breakpoints.down("md")]: {
    width: "80%",
    height: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "80%",
    height: "60%",
  },

  [theme.breakpoints.up("md")]: {
    width: "45%",
    height: "90%",
  },
  // [theme.breakpoints.up("lg")]: {
  //   backgroundColor: green[500],
  // },
}));

const BoxCustom = styled(Box)(({ theme }) => ({
  // width: "95%",
  position: "absolute",
  // top: "50%",
  // left: "0",
  [theme.breakpoints.down("sm")]: {
    top: "47%",
    left: 0,
  },

  [theme.breakpoints.down("md")]: {
    top: "47%",
    left: 0,
  },
  [theme.breakpoints.up("md")]: {
    top: "50%",
    left: 0,
    paddingRight: theme.spacing(1.3),
  },

  backgroundImage: "linear-gradient(rgba(35, 33, 33,0.1), rgb(27, 25, 25))",

  paddingLeft: theme.spacing(1.5),
}));
