import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { requesSearch } from "../../store/searchSlice";
import { ModalPopup } from "../Modal/Modal";
import "./index.scss";

const useQuery = () => new URLSearchParams(useLocation().search);

export const SearchMovies = () => {
  const [open, setOpen] = useState(false);
  const keywords = useQuery().get("keywords");
  const dispatch = useDispatch();
  const searchs = useSelector((state) => state.searchMovies.search);
  const navigate = useNavigate();

  const handleClickOpen = (id, item) => {
    setOpen(true);
    navigate(`${id}/${item}`);
  };

  const handleClose = () => {
    setOpen(false);
    navigate(-1);
  };

  useEffect(() => {
    if (keywords) dispatch(requesSearch(keywords));
  }, [keywords, dispatch]);

  return (
    <div className="containerMovie">
      {searchs && searchs.length > 0 ? (
        <div className="searchContent">
          {searchs.map((item) => (
            <div
              key={item.id}
              className="movieItem"
              onClick={() => {
                handleClickOpen(item.id, item.title || item.name);
              }}
            >
              <img
                src={
                  item.backdrop_path !== null
                    ? `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
                    : `https://image.tmdb.org/t/p/w500${item.poster_path}`
                }
                alt=""
              />
              <span className="movieName">{item.name || item.title}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="notFound">
          Your search for "{keywords}" did not have any matches.
        </div>
      )}

      <ModalPopup open={open} setOpen={open} handleClose={handleClose} />
    </div>
  );
};
