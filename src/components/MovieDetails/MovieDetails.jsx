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

  const onReady = (e) => {
    e.target.pauseVideo();
  };

  useEffect(() => {
    infoDetail();
    videoTrailer();
  }, [id, title]);

  return (
    <Box sx={style}>
      {movieTrailer ? (
        <>
          <ReactPlayer
            loop={true}
            width="100%"
            height="58%"
            url={`https://www.youtube.com/embed/${movieTrailer.key}?showinfo=0&enablejsapi=1&origin=http://localhost:3000`}
            playing={true}
            volume={1}
            muted={mutedd}
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
        >
          {movieDetail.title}
        </Typography>

        <Typography variant="subtitle1" component="span" fontSize="20px" mr={2}>
          Release date: {moment(movieDetail.release_date).format("L")}
        </Typography>
        <Typography variant="subtitle1" component="span" fontSize="20px">
          {`${hours}h ${remainingMinutes}m`}
        </Typography>

        <Typography id="modal-modal-title" variant="p" component="p" mb={2}>
          <Typography
            variant="p"
            component="span"
            color="green"
            fontSize="20px"
            fontWeight="600"
          >
            Rating: {Math.round(movieDetail.vote_average * 10)}%
          </Typography>
          <Typography
            variant="p"
            component="span"
            ml={2}
            color="yellow"
            fontSize="20px"
            fontWeight="600"
          >
            Popularity: {movieDetail.popularity}
          </Typography>
        </Typography>

        <Typography id="modal-modal-description">
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
    </Box>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "45%",
  // bgcolor: "rgb(0,0,0)",
  bgcolor: "rgb(27, 25, 25)",
  color: "white",
  height: "90%",
  boxShadow: 24,
  // zIndex: "1000",
};

const BoxCustom = styled(Box)(({ theme }) => ({
  width: "95%",
  position: "absolute",
  top: "52%",
  left: "0",

  // backgroundColor: "rgba(0, 0, 0, 0.3)",
  backgroundImage: "linear-gradient(rgba(35, 33, 33,0.1), rgb(27, 25, 25))",
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(1.3),
}));
