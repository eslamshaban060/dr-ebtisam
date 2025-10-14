"use client";
import { React, useEffect } from "react";
import { useState } from "react";
import UserButton from "../../../ar-components/user/button";
import { useRouter } from "next/navigation";
import { poppins } from "../../../../app/layout";
import Link from "next/link";
import LoadingOverlay from "../../../en-components/login/loading";
import { supabase } from "../../../../utils/supabase/supabase";
import Error from "@/app/error";

const NewPasswordFom = () => {
  const [pass, setpass] = useState("");
  const [surpass, setsurpass] = useState("");
  const [valedpass, setvaledpass] = useState(true);
  const [valedsurpass, setvaledsurpass] = useState(true);
  const [status, setStatus] = useState(false);
  const [Mail, setMail] = useState("");
  const router = useRouter();

  useEffect(() => {
    const theMail = localStorage.getItem("userMail");
    setMail(theMail);
  }, []);
  const submitForm = async (event) => {
    event.preventDefault();
    setStatus(true);
    if (pass.length >= 8) {
      if (pass === surpass) {
        const { data, error } = await supabase
          .from("user")
          .update({ password: pass })
          .eq("email", Mail);
        if (error) {
          setStatus(false);
          throw new Error("An error occurred while updating the password");
        } else {
          setStatus(false);
          router.push("/en/login");
        }
      } else {
        setStatus(false);
        setvaledsurpass(false);
      }
    } else {
      setStatus(false);
      setvaledpass(false);
    }
  };

  return (
    <div className="w-[100%]  relative text-[var(--wh)]">
      <form action="" className=" m-5 flex flex-col gap-5">
        {/* to handel new password  */}
        <div className=" flex flex-col gap-2">
          <label
            className={`font-[400] text-[20px] overflow-hidden `}
            htmlFor=""
          >
            New Password
          </label>
          <input
            className={` outline-0 focus:border-[3px] focus:text-[17px] w-[100%] border-[1px]  rounded-[10px] h-[65px] !px-[40px] ${
              valedpass ? " border-[var(--wh)]" : "border-[var(--re)]"
            }`}
            value={pass}
            onChange={(e) => {
              setpass(e.target.value);
            }}
            type="password"
            placeholder="Please enter your new password"
          />
          <div
            className={`${valedpass ? " hidden" : "block"} text-[var(--re)] `}
          >
            <p className={poppins.className}>
              The password must be at least 8 characters long
            </p>
          </div>
        </div>

        {/* to sure new password */}
        <div className=" flex flex-col gap-2">
          <label className=" overflow-hidden font-[400] text-[20px]" htmlFor="">
            Confirm Password
          </label>
          <input
            className={`outline-0 focus:border-[3px] focus:text-[17px] w-[100%] !px-[40px] border-[1px]  rounded-[10px] h-[65px]  ${
              valedsurpass ? "border-[var(--wh)]" : "border-[var(--re)]"
            }`}
            value={surpass}
            onChange={(e) => {
              setsurpass(e.target.value);
            }}
            type="password"
            placeholder="Please confirm your new password"
          />
          <div
            className={`flex ${
              valedsurpass ? " justify-end" : "justify-between"
            }`}
          >
            <div
              className={`${
                valedsurpass ? " hidden" : "block"
              } text-[var(--re)] `}
            >
              <p className={poppins.className}>Passwords do not match</p>
            </div>
          </div>
        </div>

        {/* buttons  */}
        <div className=" flex gap-2 md:gap-5 w-[100%]">
          <Link
            href="/en/login"
            className=" transform w-[100%] hover:!p-0  !p-1"
          >
            <UserButton color="lb" value="Back" />
          </Link>
          <div
            onClick={(e) => {
              submitForm(e);
            }}
            className="transform w-[100%] hover:!p-0  !p-1"
          >
            <UserButton color="gr" value="Confirm" />
          </div>
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

export default NewPasswordFom;
