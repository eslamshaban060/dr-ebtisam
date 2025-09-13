"use client";
import { React } from "react";
import { useState } from "react";
import UserButton from "../../ar-components/user/button";
import { useRouter } from "next/navigation";
import { poppins } from "../../../../src/app/layout";
import LoadingOverlay from "../../en-components/login/loading";
import useAuth from "../../../app/hocks/useAuth";

const LoginForm = ({ users }) => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [valedEmail, setvaledEmail] = useState(true);
  const [valedpass, setvaledpass] = useState(true);
  const [status, setStatus] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const submitForm = () => {
    event.preventDefault();
    setStatus(true);

    if (users.length >= 1) {
      const user = users.filter((person) => person.email === email.trim());
      if (user.length >= 1) {
        if (user[0].password === pass.trim()) {
          setStatus(false);
          router.push("/en");
        } else {
          setStatus(false);
          setvaledpass(false);
        }
      } else {
        setStatus(false);
        setvaledEmail(false);
      }
    } else {
      throw new Error(
        "A problem has occurred in the administrators' database."
      );
    }
  };

  return (
    <div className="w-[100%]  relative text-[var(--wh)]">
      <form action="" className=" m-5 flex flex-col gap-5">
        {/* to handel email  */}
        <div className=" flex flex-col gap-2">
          <label
            className={`font-[400] text-[20px] overflow-hidden `}
            htmlFor=""
          >
            Email
          </label>
          <input
            className={` outline-0 focus:border-[3px] focus:text-[17px] w-[100%] border-[1px]  rounded-[10px] h-[65px] !px-[40px] ${
              valedEmail ? " border-[var(--wh)]" : "border-[var(--re)]"
            }`}
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            type="email"
            placeholder="Please enter your Email"
          />
          <div
            className={`${valedEmail ? " hidden" : "block"} text-[var(--re)] `}
          >
            <p className={poppins.className}>
              The email is not registered on the website
            </p>
          </div>
        </div>

        {/* to handel password */}
        <div className=" flex flex-col gap-2">
          <label className=" overflow-hidden font-[400] text-[20px]" htmlFor="">
            Password
          </label>
          <input
            className={`outline-0 focus:border-[3px] focus:text-[17px] w-[100%] !px-[40px] border-[1px]  rounded-[10px] h-[65px]  ${
              valedpass ? "border-[var(--wh)]" : "border-[var(--re)]"
            }`}
            value={pass}
            onChange={(e) => {
              setpass(e.target.value);
            }}
            type="password"
            placeholder="Please enter your password"
          />
          <div
            className={`flex ${valedpass ? " justify-end" : "justify-between"}`}
          >
            <div
              className={`${valedpass ? " hidden" : "block"} text-[var(--re)] `}
            >
              <p className={poppins.className}>The password is incorrect.</p>
            </div>
            <div
              className={` text-[var(--wh)] underline  cursor-pointer !pt-1 text-[12px] `}
              onClick={() => {
                login();
                router.push("/en/forget-password");
              }}
            >
              <p className={poppins.className}>Forget your Password?</p>
            </div>
          </div>
        </div>

        <div
          onClick={() => {
            submitForm();
          }}
          className=" transform w-[100%] hover:!p-0  !p-1"
        >
          <UserButton color="lb" value="Log in" />
        </div>
      </form>
      <div
        className={`fixed w-[100vw] h-[100vh] left-0 top-0 z-40 ${
          status ? "block" : "hidden"
        }`}
      >
        <LoadingOverlay />
      </div>
    </div>
  );
};

export default LoginForm;
