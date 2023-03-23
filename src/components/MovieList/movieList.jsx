import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScrollSlider } from "../../scrollSlider";
import { ModalPopup } from "../Modal/Modal";
import "./movieList.scss";

export const MovieList = ({ movie, title, isNetflix }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const sliderRef = useRef();
  const movieRef = useRef();

  const handleClickOpen = (id, item) => {
    setOpen(true);
    navigate(`movie/${id}/${item}`);
  };

  const handleClose = () => {
    setOpen(false);
    navigate(-1);
  };

  const hanleArrowRigth = () => {
    const maxScroll =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    console.log(maxScroll);
    if (sliderRef.current.scrollLeft < maxScroll) {
      ScrollSlider(
        sliderRef.current,
        250,
        movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };
  const hanleArrowLeft = () => {
    if (sliderRef.current.scrollLeft > 0) {
      ScrollSlider(
        sliderRef.current,
        250,
        -movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };
  return (
    <div className="list">
      <h1 className="heading">{title}</h1>

      <Box
        gridTemplateColumns={`repeat(${movie.length}, 300px)`}
        className="movieSlider"
        ref={sliderRef}
      >
        {movie.map((item) => (
          <div
            key={item.id}
            className="movieItem"
            ref={movieRef}
            onClick={() => {
              handleClickOpen(item.id, item.title || item.name);
            }}
          >
            <img
              src={
                isNetflix
                  ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                  : `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
              }
              alt=""
            />
            <div className="movieName">{item.name || item.title}</div>
          </div>
        ))}
      </Box>

      <div
        className={`btnLeft ${isNetflix && "isNetflix"}`}
        onClick={hanleArrowLeft}
      >
        <ArrowBackIosOutlined className="icon" />
      </div>
      <div
        className={`btnRight ${isNetflix && "isNetflix"}`}
        onClick={hanleArrowRigth}
      >
        <ArrowForwardIosOutlined className="icon" />
      </div>

      <ModalPopup open={open} setOpen={open} handleClose={handleClose} />
    </div>
  );
};
