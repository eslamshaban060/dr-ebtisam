"use client";
import { useState, useRef } from "react";
import UserButton from "../button";
import { useRouter } from "next/navigation";
import { poppins } from "../../../../app/layout";
import Link from "next/link";
import LoadingOverlay from "../loading";
import useAuth from "../../../../app/hocks/useAuth";

const VerificationForm = ({ otp }) => {
  const [valedEmail, setvaledEmail] = useState(true);
  const [status, setStatus] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const [inputsValues, setInputsValues] = useState(Array(5).fill(""));
  const inputRef = useRef([]);

  const submitForm = (event) => {
    event.preventDefault();
    const otpCode = inputsValues.join("");

    if (otpCode === otp) {
      setvaledEmail(true);
      setStatus(true);
      login();
      router.push("/new-password");
    } else {
      setvaledEmail(false);
    }
  };

  return (
    <div className="w-[100%]   relative text-[var(--wh)]">
      <form action="" className=" m-5 flex flex-col gap-5">
        {/* to handel email  */}
        <div className=" flex flex-col gap-2">
          <label
            className={`font-[400] text-[20px] overflow-hidden `}
            htmlFor=""
          >
            أدخل الكود هنا
          </label>
          <div className=" flex gap-2 md:gap-5">
            {inputsValues.map((value, index) => {
              return (
                <div key={index}>
                  <input
                    ref={(el) => (inputRef.current[index] = el)}
                    className={` outline-0 focus:border-[3px] focus:text-[17px] w-[100%] border-[1px]  rounded-[10px] h-[65px]  text-center ${
                      valedEmail ? " border-[var(--wh)]" : "border-[var(--re)]"
                    }`}
                    type="text"
                    maxLength={1}
                    value={value}
                    onChange={(e) => {
                      const newValues = [...inputsValues];
                      newValues[index] = e.target.value;
                      setInputsValues(newValues);

                      if (e.target.value && index < 4) {
                        inputRef.current[index + 1].focus();
                      }
                    }}
                    onKeyDown={(e) => {
                      if (
                        e.key === "Backspace" &&
                        !inputsValues[index] &&
                        index > 0
                      ) {
                        inputRef.current[index - 1].focus();
                      }
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div
            className={`${valedEmail ? " hidden" : "block"} text-[var(--re)] `}
          >
            <p className={poppins.className}> هذا الكود غير صحيح </p>
          </div>
        </div>

        <div className=" flex gap-2 md:gap-5 w-[100%]">
          <div
            onClick={submitForm}
            className="transform w-[100%] hover:!p-0  !p-1"
          >
            <UserButton color="gr" value="متابعة" />
          </div>
          <Link
            href="/forget-password"
            className=" transform w-[100%] hover:!p-0  !p-1"
          >
            <UserButton color="lb" value="تراجع" />
          </Link>
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

export default VerificationForm;
