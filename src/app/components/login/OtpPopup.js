// "use client";
// import React, { useState } from "react";
// import { GoDotFill } from "react-icons/go";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import useAuthStore from "@/store/authStore";

// function OtpPopup({
//   mobileNo,
//   setIsLoginSignupOpen,
//   setIsOtpPopupOpen,
//   setIsInitialDetailsOpen,
// }) {
//   const [otp, setOtp] = useState({
//     num1: "",
//     num2: "",
//     num3: "",
//     num4: "",
//   });

//   const router = useRouter();
//   const { login } = useAuthStore();

//   function handleOnChange(event) {
//     const { name, value } = event.target;
//     const nextInput = document.querySelector(
//       `input[name=num${parseInt(name.slice(-1)) + 1}]`
//     );
//     const prevInput = document.querySelector(
//       `input[name=num${parseInt(name.slice(-1)) - 1}]`
//     );

//     setOtp((prevValue) => ({
//       ...prevValue,
//       [name]: value,
//     }));

//     if (value && nextInput) {
//       nextInput.focus();
//     }
//   }

//   function handleKeyDown(event) {
//     const { name, value } = event.target;
//     const prevInput = document.querySelector(
//       `input[name=num${parseInt(name.slice(-1)) - 1}]`
//     );

//     if (event.key === "Backspace" && !value && prevInput) {
//       prevInput.focus();
//     }
//   }

//   // Submit OTP
//   async function handleSubmitOtp(e) {
//     e.preventDefault();
//     const { num1, num2, num3, num4 } = otp;
//     if (!num1 || !num2 || !num3 || !num4) {
//       alert("Enter otp fields");
//     } else {
//       const fullOtp = `${num1}${num2}${num3}${num4}`;
//       console.log(fullOtp);

//       // API call

//       try {
//         const response = await axios.post(
//           `${process.env.NEXT_PUBLIC_API_URL}/user/verify-otp`,
//           {
//             mobile: mobileNo,
//             otp: fullOtp,
//           }
//         );

//         console.log(response);
//         if (response.data.activeUser) {
//           // Login success and redirect
//           const userData = response.data.existingUser;
//           login(userData);
//           alert(response.data.message);
//           router.push("/company-home");
//         } else {
//           // continue to get company basic details
//           alert(response.data.message);
//           setTimeout(() => {
//             setIsOtpPopupOpen(false);
//             setIsLoginSignupOpen(false);
//             setIsInitialDetailsOpen(true);
//           }, 1000);
//         }
//       } catch (error) {
//         setIsOtpPopupOpen(true);
//         setIsLoginSignupOpen(false);
//         setIsInitialDetailsOpen(false);
//       }
//     }
//   }

//   return (
//     <div className="w-full md:max-w-[854px] h-auto md:h-[509px] py-10 bg-white drop-shadow-xl rounded-2xl flex flex-col md:flex-row">
//       {/* Image Section */}
//       <div className="w-full md:w-5/12 lg:w-1/2 p-5 h-full  md:h-full flex justify-center items-center">
//         <img
//           src="/otp.svg"
//           alt="login-img"
//           className="w-full lg:h-full object-cover"
//         />
//       </div>

//       {/* Form Section */}
//       <div className="w-full md:w-7/12 lg:w-1/2 h-auto md:h-full md:ps-6 px-4 md:px-0 border-[#C0C7D5] border-t-[1px] md:border-l-[1px] md:border-t-0 text-[#C0C7D5] relative ">
//         <GoDotFill className="size-0 md:absolute md:size-4 md:-left-2 md:-top-2 " />
//         <GoDotFill className="size-0 md:absolute md:size-4 md:-left-2 md:-bottom-2" />

//         <div className="mt-12 md:mt-16">
//           <h1 className="w-full md:w-auto font-semibold text-2xl text-[#191C21]">
//             Verify with OTP
//           </h1>
//           <p className="text-[#424752] text-xs pt-5">Sent to {mobileNo}</p>
//         </div>
//         <div className="w-[232px] mt-10 flex justify-between">
//           <input
//             type="tel"
//             maxLength={1}
//             className="w-10 h-14 border-2 border-[#707784] rounded-md bg-white text-black text-xl p-3 outline-none focus:border-[#003E82]"
//             name="num1"
//             value={otp.num1}
//             onChange={handleOnChange}
//             onKeyDown={handleKeyDown}
//           />
//           <input
//             type="tel"
//             maxLength={1}
//             className="w-10 h-14 border-2 border-[#707784] rounded-md bg-white text-black text-xl p-3 outline-none focus:border-[#003E82]"
//             name="num2"
//             value={otp.num2}
//             onChange={handleOnChange}
//             onKeyDown={handleKeyDown}
//           />
//           <input
//             type="tel"
//             maxLength={1}
//             className="w-10 h-14 border-2 border-[#707784] rounded-md bg-white text-black text-xl p-3 outline-none focus:border-[#003E82]"
//             name="num3"
//             value={otp.num3}
//             onChange={handleOnChange}
//             onKeyDown={handleKeyDown}
//           />
//           <input
//             type="tel"
//             maxLength={1}
//             className="w-10 h-14 border-2 border-[#707784] rounded-md bg-white text-black text-xl p-3 outline-none focus:border-[#003E82]"
//             name="num4"
//             value={otp.num4}
//             onChange={handleOnChange}
//             onKeyDown={handleKeyDown}
//           />
//         </div>

//         <button
//           className="my-4 p-2 bg-[#74CE3A] text-base text-white"
//           onClick={handleSubmitOtp}
//         >
//           Submit Otp
//         </button>

//         <p className="text-[#707784] text-xs mt-8">
//           Resend OTP in <span className="text-[#191C21] text-xs"> 00:30</span>{" "}
//         </p>

//         <p className="text-[#424752] text-xs mt-8">
//           Have trouble logging in ?{" "}
//           <span className="text-[#003E82] text-sm font-semibold">Get Help</span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default OtpPopup;

"use client";
import React, { useState, useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import axios from "axios";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/authStore";

function OtpPopup({
  mobileNo,
  setIsLoginSignupOpen,
  setIsOtpPopupOpen,
  setIsInitialDetailsOpen,
}) {
  const [otp, setOtp] = useState({
    num1: "",
    num2: "",
    num3: "",
    num4: "",
  });
  const [timer, setTimer] = useState(30);
  const [isResend, setIsResend] = useState(false);
  const [isOtpError, setIsOtpError] = useState(false);

  const router = useRouter();
  const { login } = useAuthStore();

  // Timer logic
  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setIsResend(true);
    }

    return () => clearInterval(interval);
  }, [timer]);

  // Handle input changes
  function handleOnChange(event) {
    setIsOtpError(false);
    const { name, value } = event.target;
    const nextInput = document.querySelector(
      `input[name=num${parseInt(name.slice(-1)) + 1}]`
    );

    setOtp((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));

    if (value && nextInput) {
      nextInput.focus();
    }
  }

  // Handle keydown for backspace navigation
  function handleKeyDown(event) {
    const { name, value } = event.target;
    const prevInput = document.querySelector(
      `input[name=num${parseInt(name.slice(-1)) - 1}]`
    );

    if (event.key === "Backspace" && !value && prevInput) {
      prevInput.focus();
    }
  }

  // Handle OTP submission
  async function handleSubmitOtp(e) {
    e.preventDefault();
    setIsOtpError(false);
    const { num1, num2, num3, num4 } = otp;
    if (!num1 || !num2 || !num3 || !num4) {
      setIsOtpError(true);
      alert("Enter all OTP fields");
    } else {
      const fullOtp = `${num1}${num2}${num3}${num4}`;
      console.log(fullOtp);

      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/verify-otp`,
          {
            mobile: mobileNo,
            otp: fullOtp,
          }
        );

        console.log(response);
        setIsOtpError(false);
        if (response.data.activeUser) {
          const userData = response.data.existingUser;
          const token = response.data.token;
          login({ user: userData, token });
          alert(response.data.message);
          router.push("/company-home");
        } else {
          alert(response.data.message);
          setTimeout(() => {
            setIsOtpPopupOpen(false);
            setIsLoginSignupOpen(false);
            setIsInitialDetailsOpen(true);
          }, 1000);
        }
      } catch (error) {
        console.error(error);
        setIsOtpError(true);
      }
    }
  }

  // Handle Resend OTP
  async function handleResendOtp() {
    setOtp({ num1: "", num2: "", num3: "", num4: "" });
    setTimer(30);
    setIsResend(false);
    setIsOtpError(false);

    // Optionally, trigger an API call to resend the OTP
    if (!mobileNo) {
      // alert("Enter your mobile number.");
      return;
    } else {
      // API call
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/login`,
          {
            mobile: Number(mobileNo),
          }
        );
        console.log(response);
        alert(response.data.message);
        setTimeout(() => {
          setIsOtpPopupOpen(true);
          setIsLoginSignupOpen(false);
          setIsInitialDetailsOpen(false);
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="w-full md:max-w-[854px] h-auto md:h-[509px] py-10 bg-white drop-shadow-xl rounded-2xl flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="w-full md:w-5/12 lg:w-1/2 p-5 h-full flex justify-center items-center">
        <img
          src="/otp.svg"
          alt="login-img"
          className="w-full lg:h-full object-cover"
        />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-7/12 lg:w-1/2 h-auto md:h-full md:ps-6 px-4 md:px-0 border-[#C0C7D5] border-t-[1px] md:border-l-[1px] md:border-t-0 text-[#C0C7D5] relative">
        <GoDotFill className="size-0 md:absolute md:size-4 md:-left-2 md:-top-2 " />
        <GoDotFill className="size-0 md:absolute md:size-4 md:-left-2 md:-bottom-2" />

        <div className="mt-12 md:mt-16">
          <h1 className="w-full md:w-auto font-semibold text-2xl text-[#191C21]">
            Verify with OTP
          </h1>
          <p className="text-[#424752] text-xs pt-5">Sent to {mobileNo}</p>
        </div>
        <div className="w-[232px] mt-10 flex justify-between">
          {Object.keys(otp).map((key, index) => (
            <input
              key={index}
              type="tel"
              maxLength={1}
              className={`w-10 h-14 border-2  rounded-md bg-white text-black text-xl p-3 outline-none focus:border-[#003E82] ${
                isOtpError ? "border-red-500" : "border-[#707784]"
              }`}
              name={key}
              value={otp[key]}
              onChange={handleOnChange}
              onKeyDown={handleKeyDown}
            />
          ))}
        </div>

        {isOtpError && <p className="text-red-500 text-xs mt-4">Invalid OTP</p>}

        <p className="text-[#707784] text-xs mt-8">
          Resend OTP in{" "}
          <span className="text-[#191C21] text-xs">
            {timer > 0 ? `00:${timer < 10 ? `0${timer}` : timer}` : "00:00"}
          </span>
        </p>

        <button
          className={`my-4 p-2 text-base text-white ${
            isResend ? "bg-[#003E82]" : "bg-[#74CE3A]"
          }`}
          onClick={isResend ? handleResendOtp : handleSubmitOtp}
        >
          {isResend ? "Resend OTP" : "Submit OTP"}
        </button>

        <p className="text-[#424752] text-xs mt-8">
          Have trouble logging in ?{" "}
          <span className="text-[#003E82] text-sm font-semibold">Get Help</span>
        </p>
      </div>
    </div>
  );
}

export default OtpPopup;
