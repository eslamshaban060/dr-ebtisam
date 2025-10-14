import React from "react";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("ther are an error in protected routs");
  }
  return context;
};

export default useAuth;
