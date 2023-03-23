import { Modal } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { MovieDetails } from "../MovieDetails/MovieDetails";

export const ModalPopup = ({ open, handleClose }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <Outlet />
        </>
      </Modal>
    </div>
  );
};
