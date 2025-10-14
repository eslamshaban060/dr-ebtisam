import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const UserData = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("ther are an error in user data");
  }
  return context;
};

export default UserData;
