"use client";
import React from "react";
import { useEffect, useState } from "react";

const page = () => {
  const [savedOtp, setSavedOtp] = useState(null);

  useEffect(() => {
    const otp = localStorage.getItem("otp");
    setSavedOtp(otp);
  }, []);
  return (
    <div>
      {savedOtp}
      {savedOtp}
      {savedOtp}
      {savedOtp}
      {savedOtp}
      {savedOtp}
      {savedOtp}
      {savedOtp}
      {savedOtp}
      {savedOtp}
    </div>
  );
};

export default page;
