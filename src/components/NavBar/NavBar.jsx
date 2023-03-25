import {
  ArrowDropDown,
  Dehaze,
  Logout,
  Notifications,
  Search,
} from "@mui/icons-material";
import { Box, Modal } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.scss";

export const NavBar = () => {
  const handleLogout = () => {
    sessionStorage.removeItem("userToken");
    window.location.reload();
  };

  const [scroll, setScroll] = useState(false);
  const [keywords, setKeyWords] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("HomePage");

  function handleTabClick(tabName) {
    setSelectedTab(tabName);
  }
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    const key = e.target.value;
    setKeyWords(key);
    key.length > 0
      ? navigate(`/search?keywords=${key.trim()}`)
      : navigate("/home") && setSelectedTab("HomePage");
  };

  window.onscroll = () => {
    setScroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={scroll ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <Dehaze className="icon" onClick={handleOpen} />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
            onClick={() => {
              navigate("/");
            }}
          />
        </div>

        <div className="right">
          <div className="navSearch">
            <Search className="icon iconSearch" />
            <input
              type="text"
              placeholder="Search title, genres, people"
              value={keywords}
              onChange={handleSearch}
            />
          </div>
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />

          <Logout className="icon" onClick={handleLogout} />
          {/* <div className="profile ">
            <ArrowDropDown className="icon" />
          
            <div className="option">
              <span>Settings</span>
              <span onClick={handleLogout}>LogOut</span>
            </div>
          </div> */}
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modalNav"
      >
        <Box sx={style}>
          <span
            className={`navHeading ${
              selectedTab === "HomePage" ? "selected" : ""
            }`}
            onClick={() => {
              handleTabClick("HomePage");
              navigate("/home");
            }}
          >
            HomePage
          </span>
          <span
            className={`navHeading ${
              selectedTab === "Anime" ? "selected" : ""
            }`}
            onClick={() => {
              handleTabClick("Anime");
              navigate("/genre/anime");
            }}
          >
            Anime
          </span>
          <span
            className={`navHeading ${
              selectedTab === "Actions Movie" ? "selected" : ""
            }`}
            onClick={() => {
              handleTabClick("Actions Movie");
              navigate("/genre/crime");
            }}
          >
            Crime Movies
          </span>
          <span
            className={`navHeading ${
              selectedTab === "Dramas" ? "selected" : ""
            }`}
            onClick={() => {
              handleTabClick("Dramas");
              navigate("/genre/dramas");
            }}
          >
            Dramas
          </span>
          <span
            className={`navHeading ${
              selectedTab === "Music & Musicals" ? "selected" : ""
            }`}
            onClick={() => {
              handleTabClick("Music & Musicals");
              navigate("/genre/music");
            }}
          >
            Music & Musicals
          </span>
          <span
            className={`navHeading ${
              selectedTab === "Romantic Movies" ? "selected" : ""
            }`}
            onClick={() => {
              handleTabClick("Romantic Movies");
              navigate("/genre/romantic");
            }}
          >
            Romantic Movies
          </span>
          <span
            className={`navHeading ${
              selectedTab === "Horror Movies" ? "selected" : ""
            }`}
            onClick={() => {
              handleTabClick("Horror Movies");
              navigate("/genre/horror");
            }}
          >
            Horror Movies
          </span>
          <span
            className={`navHeading ${
              selectedTab === "TV Shows" ? "selected" : ""
            }`}
            onClick={() => {
              handleTabClick("TV Shows");
              navigate("/genre/tvshow");
            }}
          >
            TV Shows
          </span>
        </Box>
      </Modal>
    </div>
  );
};

const style = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "0",
  left: "0",
  width: 250,
  bgcolor: "rgb(27, 25, 25)",
  color: "white",
  height: "100%",
  boxShadow: 24,
};
