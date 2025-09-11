"use client";
import React from "react";
import ProtectedRoutes from "../../protected/protectedRoutes";
const NewPassword = () => {
  return <div>اكتب باسورد جديد </div>;
};

export default function protectedNewPassword() {
  return (
    <ProtectedRoutes>
      <NewPassword />
    </ProtectedRoutes>
  );
}
