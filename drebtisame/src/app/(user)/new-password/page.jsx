"use client";
import React from "react";
import Header from "../../../../src/components/ar-components/user/Header";
import NewPasswordFom from "../../../components/ar-components/user/newPssword/newPasswordFom";
import ProtectedRoutes from "../../protected/protectedRoutes";

const NewPassword = () => {
  return (
    <div className=" w-[100vw] h-[120vh] md:h-[100vh] bg-[url('/user/userbg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 h-[120vh] md:h-[100vh] bg-[#08294a]/10 backdrop-blur-sm"></div>
      <div className=" relative  flex items-center justify-center z-10 w-full h-[100%]">
        <div className=" max-w-[650px]  flex flex-col gap-5 w-[90%] h-auto min-h-[430px] bg-transparent">
          {/* top part in the login page  */}
          <div>
            <Header
              describtion="من فضلك أدخل كلمة مرور جديدة لحسابك"
              title="كلمة مرور جديدة"
            />
          </div>
          <div>
            <NewPasswordFom />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function protectedNewPassword() {
  return (
    <ProtectedRoutes>
      <NewPassword />
    </ProtectedRoutes>
  );
}
