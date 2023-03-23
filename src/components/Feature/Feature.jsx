import { VolumeOff, VolumeUp } from "@mui/icons-material";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./feature.scss";

export const Feature = () => {
  const [isMuted, setIsMuted] = useState(true);
  return (
    <div className="feature">
      <ReactPlayer
        loop={true}
        className="videoIntro"
        width="100%"
        height="100%"
        url="https://vimeo.com/322858764"
        playing={true}
        volume={1}
        muted={isMuted}
      />

      <div className="info">
        <div className="desc">
          <h1>NETFLIX The Rain</h1>
          <span>
            Trailer for Netflix series "The Rain" Production: Fox Devil Films
            GmbH for Netflix Amsterdam Director: Simon Ritzler Dop: Carlo
            Jelavic Editor: Michael Timmers Colorist: Mike Bothe Compositing:
            Stathis Nafpliotis
          </span>
        </div>
      </div>

      <div onClick={() => setIsMuted((pre) => !pre)}>
        {!isMuted ? (
          <>
            <VolumeUp className="btn-vol" />
          </>
        ) : (
          <>
            <VolumeOff className="btn-vol" />
          </>
        )}
      </div>

      <div className="fadeBotton"></div>
    </div>
  );
};
