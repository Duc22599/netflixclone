import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRouter = ({ children }) => {
  const tokenUser = JSON.parse(sessionStorage.getItem("userToken"));
  return <div>{tokenUser ? children : <Navigate to={"/login"} />}</div>;
};
