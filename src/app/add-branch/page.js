"use client";
import React from "react";
import Navbar from "../components/Navbar";

function AddBranch() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-full mt-[100px] md:mt-[130px] xl:mt-[152px] bg-[#F9F9FF] px-4 md:px-8 lg:px-[72px]">
        <div className="pt-14">
          <p className="text-[#707784] text-[14px]">
            Home {">"} Add branch or company
          </p>

          <p className="text-[#181C22] text-[24px] font-semibold pt-8 ">
            Add Branch / Company
          </p>
        </div>
        <div className="w-full bg-white border-[1px] py-14 border-[#C2C6D4] rounded-lg px-4 my-10  sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="">
            <h1 className="text-[#404753] text-[16px] border-b-[1px] border-[#C0C7D5] py-2">
              Basic details
            </h1>

            <div className=" lg:ps-20   pt-8 flex flex-col gap-y-4">
              <input
                type="text"
                placeholder="Branch / Company name *"
                className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
              />
              <input
                type="text"
                placeholder="City or Location *"
                className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
              />
              <select
                type="text"
                placeholder="Select District  *"
                className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
              >
                <option selected disabled className="text-[#404753]">
                  Select District *
                </option>
                <option>Kerela</option>
                <option>Kerela</option>
                <option>Kerela</option>
              </select>
              <select
                type="text"
                placeholder="Select Sector  *"
                className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
              >
                <option selected disabled className="text-[#404753]">
                  Select Sector *
                </option>
                <option>Kerela</option>
                <option>Kerela</option>
                <option>Kerela</option>
              </select>
              <input
                type="text"
                placeholder="Email"
                className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
              />
              <input
                type="tel"
                maxLength={10}
                placeholder="Mobile Number"
                className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
              />
            </div>
          </div>

          <div className="">
            <h1 className="text-[#404753] text-[16px] border-b-[1px] border-[#C0C7D5] py-2 ">
              Branch Admin details
            </h1>

            <div className=" lg:ps-20   pt-8 flex flex-col gap-y-4">
              <input
                type="text"
                placeholder="Name of Branch Admin *"
                className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
              />
              <input
                type="tel"
                maxLength={10}
                placeholder="Mobile Number of Branch Admin *"
                className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
              />
              <input
                type="email"
                placeholder="Email of Branch Admin "
                className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
              />
            </div>
          </div>

          <div className="">
            <h1 className="text-[#404753] text-[16px] border-b-[1px] border-[#C0C7D5] py-2">
              Labour / Employee details
            </h1>

            <div className=" lg:ps-20   pt-8 flex flex-col gap-y-4">
              <input
                type="tel"
                placeholder="Total number of labours*"
                className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
              />
              <input
                type="tel"
                placeholder="Number of  female labours"
                className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
              />
              <input
                type="tel"
                placeholder="Number of  male labours"
                className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
              />

              <input
                type="tel"
                placeholder="Number of  contract labours"
                className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
              />
              <input
                type="tel"
                placeholder="Number of  migrant labours"
                className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
              />

              <button className="w-full h-[56px] mt-6 bg-[#74CE3A] text-white text-[14px] font-semibold flex justify-center items-center">
                CONTINUE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBranch;
