"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { MdLocationOn, MdMail, MdPhone } from "react-icons/md";
import Footer from "../components/Footer";

function ContactUs() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-[#000000c1]">
        <div className="size-24 rounded-full animate-scale-up-down">
          <img
            src="/caab-score-icon.jpg"
            alt="Logo"
            className="w-full object-cover rounded-full"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen m-0 p-0 bg-white">
      <Navbar />

      {/* contact us section  */}
      <div className="mt-[100px] md:mt-[130px] xl:mt-[152px] w-full m-0 px-4 md:px-8 lg:px-[72px] py-20 bg-white">
        <h1 className="text-4xl font-semibold leading-10 text-[#191C21]">
          Contact Us
        </h1>
        <div className="pt-8 flex flex-col lg:flex-row gap-6 bg-white">
          <div className="w-full lg:w-1/2">
            <p className="text-base font-normal leading-10 text-[#424752]">
              We're here to assist you with any questions, inquiries, or
              concerns you may have. Feel free to reach out to us.
            </p>
            <form
              action=""
              className="mt-6 flex flex-col gap-6 bg-white"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Website under development.");
              }}
            >
              <input
                type="text"
                name="name"
                id=""
                placeholder="Your Name"
                className="px-2 h-14 bg-white text-base text-[#404753] leading-6 rounded-lg outline-none border-[#707784] border-[1px] placeholder:text-[#707784] focus:border-[#003E82] focus:border-2"
              />
              <input
                type="text"
                name="phoneNumber"
                id=""
                placeholder="Your Phone No."
                className="px-2 h-14 bg-white text-base text-[#404753] leading-6 rounded-lg outline-none border-[#707784] border-[1px] placeholder:text-[#707784] focus:border-[#003E82] focus:border-2"
              />
              <input
                type="text"
                name="email"
                id=""
                placeholder="Your Email"
                className="px-2 h-14 bg-white text-base text-[#404753] leading-6 rounded-lg outline-none border-[#707784] border-[1px] placeholder:text-[#707784] focus:border-[#003E82] focus:border-2"
              />
              <input
                type="text"
                name="subject"
                id=""
                placeholder="Subject"
                className="px-2 h-14 bg-white text-base text-[#404753] leading-6 rounded-lg outline-none border-[#707784] border-[1px] placeholder:text-[#707784] focus:border-[#003E82] focus:border-2"
              />
              <textarea
                name="message"
                id=""
                placeholder="Message"
                rows="6"
                className="p-2 pt-4 bg-white text-base text-[#404753] leading-6 rounded-lg outline-none border-[#707784] border-[1px] placeholder:text-[#707784] focus:border-[#003E82] focus:border-2"
              ></textarea>
              <button
                type="submit"
                className="mt-2 px-6 py-4 h-[4.5rem] rounded-2xl text-base font-semibold leading-6 text-white bg-[#2F6C00] hover:bg-[#2c8835]"
              >
                SEND NOW
              </button>
            </form>
          </div>

          <div className="w-full lg:w-1/2 pt-20 lg:pt-3 bg-white">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-[#CBDBFF] rounded-2xl flex flex-col justify-center items-center gap-y-2 drop-shadow-md">
                <div>
                  <MdPhone className="text-[40px] text-[#003E82]" />
                </div>
                <div className="flex flex-col items-center  gap-y-4">
                  <p className="text-center text-base font-semibold leading-6 text-[#727783]">
                    Phone Number
                  </p>
                  <p className="text-center text-base font-normal leading-6 text-[#191C21]">
                    +91 7736634226
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#CBDBFF] rounded-2xl flex flex-col justify-center items-center gap-y-2 drop-shadow-md">
                <div>
                  <MdMail className="text-[40px] text-[#003E82]" />
                </div>
                <div className="flex flex-col items-center  gap-y-4">
                  <p className="text-center text-base font-semibold leading-6 text-[#727783]">
                    Email Address
                  </p>
                  <p className="text-center text-base font-normal leading-6 text-[#191C21]">
                    info@caabscore.com
                  </p>
                </div>
              </div>

              <div className="sm:col-span-2 p-6 bg-[#CBDBFF] rounded-2xl flex flex-col justify-center items-center gap-y-2 drop-shadow-md">
                <div>
                  <MdLocationOn className="text-[40px] text-[#003E82]" />
                </div>
                <div className="flex flex-col items-center gap-y-4">
                  <p className="text-center text-base font-semibold leading-6 text-[#727783]">
                    Office Address
                  </p>
                  <p className="text-center text-base font-normal leading-6 text-[#191C21]">
                    <span>Ground Floor, Raiban Shopping Complex,</span>
                    <br />
                    <span>Palace Road, Alappuzha</span>
                    <br />
                    <span>Kerala, 688001</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of contact us section  */}

      <Footer />
    </div>
  );
}

export default ContactUs;
