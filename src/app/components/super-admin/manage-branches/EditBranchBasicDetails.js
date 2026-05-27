"use client";
import useAuthStore from "@/store/authStore";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { TbAlertTriangle } from "react-icons/tb";

function EditBranchBasicDetails({
  selectedbranchId,
  selectedBranchDetail,
  setIsEditBranchBasicDetailsOpen,
  setBranchDetailRenderToggle,
}) {
  const { token } = useAuthStore();

  const [businessTypeList, setBusinessTypeList] = useState([]);
  const [basicDetails, setBasicDetails] = useState({
    companyName: "",
    location: "",
    businessType: "",
    branchEmail: "",
    mobileNo: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/user/listBusinessType`,
          { headers: { Authorization: `Bearer ${token}` } },
        );
        const data = response.data.data;
        const mappedData = data.map((type) => type.business_type);
        setBusinessTypeList(mappedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        // toast.error("Error fetching data.");\
      }
    };

    fetchData();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setBasicDetails((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  async function handleUpdate(e) {
    e.preventDefault();
    const { companyName, location, businessType, branchEmail, mobileNo } =
      basicDetails;

    const dataToSend = {
      branch_name: companyName ? companyName : selectedBranchDetail.branch_name,
      city: location ? location : selectedBranchDetail.city,
      business_type: businessType
        ? businessType
        : selectedBranchDetail.business_type,
      branch_email: branchEmail
        ? branchEmail
        : selectedBranchDetail.branch_email,
      admin_no: mobileNo ? mobileNo : selectedBranchDetail.admin_no,
    };

    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/user/editBranchDetails/${selectedbranchId}`,
        dataToSend,
        { headers: { Authorization: `Bearer ${token}` } },
      );

      alert(response.data.message);

      setTimeout(() => {
        setBasicDetails({
          companyName: "",
          location: "",
          businessType: "",
          branchEmail: "",
          mobileNo: "",
        });
        setBranchDetailRenderToggle((prevValue) => !prevValue);
        setIsEditBranchBasicDetailsOpen(false);
      }, 500);
    } catch (error) {
      console.error("Error fetching data:", error);
      // toast.error("Error fetching data.");\
    }
  }

  return createPortal(
    <div className="w-screen h-screen px-4 md:px-8 lg:px-[72px] py-20 bg-[#000000c1] fixed top-0 left-0 z-50 flex justify-center items-start overflow-y-auto">
      <div className="w-[560px] min-h-max pb-10 flex flex-col gap-10 bg-white">
        <div className="p-6 bg-[#003E82] text-white text-xl font-semibold relative">
          <h3>Branch Basic Details</h3>
          <button
            onClick={() => setIsEditBranchBasicDetailsOpen(false)}
            className="absolute -top-8 right-0 sm:-right-6 rotate-45 text-3xl font-normal text-white"
          >
            +
          </button>
        </div>
        <div className="px-4 sm:px-6 flex flex-col gap-y-6">
          <div className="flex flex-col gap-2">
            <div>
              <label className="text-xs text-[#404753]">
                Branch / Company Name
              </label>
              <input
                type="text"
                placeholder="Branch / Company Name"
                className="w-full h-10 px-3 text-sm bg-white text-[#404753] outline-none border-[#707784] border-[1px] rounded-lg"
                name="companyName"
                value={basicDetails.companyName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-xs text-[#404753]">City</label>
              <input
                type="text"
                placeholder="City"
                className="w-full h-10 px-3 text-sm bg-white text-[#404753] outline-none border-[#707784] border-[1px] rounded-lg"
                name="location"
                value={basicDetails.location}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-xs text-[#404753]">Business Type</label>
              <select
                placeholder="Select Business Type"
                className="w-full h-10 px-3 text-sm bg-white text-[#404753] outline-none border-[#707784] border-[1px] rounded-lg"
                name="businessType"
                value={basicDetails.businessType}
                onChange={handleChange}
              >
                <option
                  className="font-base bg-white text-[#404753]"
                  value=""
                  selected
                  disabled
                >
                  Select Business Type
                </option>
                {businessTypeList[0] &&
                  businessTypeList.map((businessType) => (
                    <option key={businessType} value={businessType}>
                      {businessType}
                    </option>
                  ))}
              </select>

              <p className="text-[#BA1A1A] flex gap-1 text-xs py-1">
                <span>
                  <TbAlertTriangle className="text-2xl" />
                </span>
                <span>
                  Changing the sector may result in the complete loss of all
                  data related to the current sector. You will have to start
                  from the beginning if you proceed.
                </span>
              </p>
            </div>

            <div>
              <label className="text-xs text-[#404753]">
                Branch / Company Name
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full h-10 px-3 text-sm bg-white text-[#404753] outline-none border-[#707784] border-[1px] rounded-lg"
                name="branchEmail"
                value={basicDetails.branchEmail}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-xs text-[#404753]">
                Branch / Company Name
              </label>
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full h-10 px-3 text-sm bg-white text-[#404753] outline-none border-[#707784] border-[1px] rounded-lg"
                name="mobileNo"
                value={basicDetails.mobileNo}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <button
              className="w-full h-12 px-4 py-2 bg-[#74CE3A] text-white text-base font-semibold rounded-xl"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default EditBranchBasicDetails;
