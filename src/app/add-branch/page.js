"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import LoadingComponent from "@/components/LoadingComponent";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useAuthStore from "@/store/authStore";
import ProtectedRoute from "@/components/ProtectedRoutes";
import { useRouter } from "next/navigation";
import Link from "next/link";

const districts = [
  "Alappuzha",
  "Ernakulam",
  "Idukki",
  "Kannur",
  "Kasaragod",
  "Kollam",
  "Kottayam",
  "Kozhikode",
  "Malappuram",
  "Palakkad",
  "Pathanamthitta",
  "Thiruvananthapuram",
  "Thrissur",
  "Wayanad",
];

const validationSchema = yup.object().shape({
  companyName: yup.string().required("Company name is required"),
  location: yup.string().required("Location is required"),
  district: yup.string().required("District is required"),
  businessType: yup.string().required("Business type is required"),
  branchAdminName: yup.string().required("Branch admin name is required"),
  branchAdminMobileNo: yup
    .string()
    .required("Branch admin mobile number is required")
    .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits"),
});

function AddBranch() {
  const [isLoading, setIsLoading] = useState(true);
  const [businessTypeList, setBusinessTypesList] = useState({});

  const [caabId, setCaabId] = useState("");

  const { user, initializeUser } = useAuthStore();

  // const user = JSON.parse(localStorage.getItem("user"));

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      companyName: user?.company_name,
      location: "",
      district: "",
      businessType: "",
      email: "",
      mobileNo: "",
      branchAdminName: "",
      branchAdminMobileNo: "",
      branchAdminEmail: "",
      totalLabourNumber: "",
      femaleLabourNumber: "",
      contractLabourNumber: "",
      migrantLabourNumber: "",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/listBusinessType`
        );

        console.log(response);

        const data = response.data.businessType;
        const mappedData = data.map((type) => type.business_type);
        setBusinessTypesList(mappedData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        // toast.error("Error fetching data.");\
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   setCaabId(user?.caab_id);
  // }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setCaabId(data?.caab_id);
  }, []);

  useEffect(() => {
    initializeUser();
  }, []);

  const onSubmit = async (data) => {
    console.log("Form submitted successfully:", data);

    const {
      companyName,
      location,
      district,
      businessType,
      email,
      mobileNo,
      branchAdminName,
      branchAdminMobileNo,
      branchAdminEmail,
      totalLabourNumber,
      femaleLabourNumber,
      contractLabourNumber,
      migrantLabourNumber,
    } = data;

    const dataToSend = {
      caab_id: caabId,
      branch_name: companyName,
      city: location,
      district: district,
      business_type: businessType,
      branch_email: email,
      admin_no: mobileNo,
      branch_admin_name: branchAdminName,
      branch_mobile_no: branchAdminMobileNo,
      admin_email: branchAdminEmail,
      total_employees: totalLabourNumber,
      no_female: femaleLabourNumber,
      no_contract: contractLabourNumber,
      no_migrant: migrantLabourNumber,
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/addBranch`,
        dataToSend
      );
      alert(response.data.message);
      reset(); //reset inputFormData
      setTimeout(() => {
        router.push("/company-home");
      }, 500);
    } catch (error) {
      console.error("Error fetching data:", error);
      // toast.error("Error fetching data.");\
      alert(error.response.data.message);
    }
  };

  if (isLoading) return <LoadingComponent />;

  return (
    <div>
      <Navbar />
      <div className="w-full h-full mt-[100px] md:mt-[130px] xl:mt-[152px] bg-[#F9F9FF] px-4 md:px-8 lg:px-[72px] pb-10">
        <div className="pt-14">
          <p className="text-[#707784] text-[14px]">
            <Link href={"/company-home"}>Home</Link>
            {">"} <Link href={"/add-branch"}>Add branch or company</Link>
          </p>

          <p className="text-[#181C22] text-[24px] font-semibold pt-8 ">
            Add Branch / Company
          </p>
        </div>
        <form
          className="w-full bg-white border-[1px] py-14 border-[#C2C6D4] rounded-lg px-4 my-10  sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="">
            <h1 className="text-[#404753] text-[16px] border-b-[1px] border-[#C0C7D5] py-2">
              Basic details
            </h1>

            <div className=" lg:ps-20   pt-8 flex flex-col gap-y-4">
              <input
                type="text"
                placeholder="Branch / Company name *"
                className={`w-full h-[56px] px-4 placeholder:text-[#404753] rounded-lg text-black ${
                  errors.companyName
                    ? "border-2 border-red-500 "
                    : "border-[1px]  border-[#707784]"
                }`}
                {...register("companyName")}
              />
              <p className="text-red-500 text-xs">
                {errors.companyName?.message}
              </p>
              <input
                type="text"
                placeholder="City or Location *"
                className={`w-full h-[56px] px-4 placeholder:text-[#404753] rounded-lg text-black ${
                  errors.location
                    ? "border-2 border-red-500 "
                    : "border-[1px]  border-[#707784]"
                }`}
                {...register("location")}
              />
              <p className="text-red-500 text-xs">{errors.location?.message}</p>
              <select
                placeholder="Select District *"
                className={`w-full h-[56px] px-4 placeholder:text-[#404753] rounded-lg text-black ${
                  errors.district
                    ? "border-2 border-red-500 "
                    : "border-[1px]  border-[#707784]"
                }`}
                {...register("district")}
              >
                <option value="" selected disabled className="text-[#404753]">
                  Select District *
                </option>
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
              <p className="text-red-500 text-xs">{errors.district?.message}</p>
              <select
                placeholder="Select Buisness Type *"
                className={`w-full h-[56px] px-4 placeholder:text-[#404753] rounded-lg text-black ${
                  errors.businessType
                    ? "border-2 border-red-500 "
                    : "border-[1px]  border-[#707784]"
                }`}
                {...register("businessType")}
              >
                <option value="" selected disabled className="text-[#404753]">
                  Select Buisness Type *
                </option>
                {businessTypeList.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <p className="text-red-500 text-xs">
                {errors.businessType?.message}
              </p>
              <input
                type="email"
                placeholder="Email"
                className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
                {...register("email")}
              />
              <input
                type="tel"
                maxLength={10}
                placeholder="Mobile Number"
                className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
                {...register("mobileNo")}
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
                className={`w-full h-[56px] px-4 placeholder:text-[#404753] rounded-lg text-black ${
                  errors.branchAdminName
                    ? "border-2 border-red-500 "
                    : "border-[1px]  border-[#707784]"
                }`}
                {...register("branchAdminName")}
              />
              <p className="text-red-500 text-xs">
                {errors.branchAdminName?.message}
              </p>
              <input
                type="tel"
                maxLength={10}
                placeholder="Mobile Number of Branch Admin *"
                className={`w-full h-[56px] px-4 placeholder:text-[#404753] rounded-lg text-black ${
                  errors.branchAdminMobileNo
                    ? "border-2 border-red-500 "
                    : "border-[1px]  border-[#707784]"
                }`}
                {...register("branchAdminMobileNo")}
              />
              <p className="text-red-500 text-xs">
                {errors.branchAdminMobileNo?.message}
              </p>
              <input
                type="email"
                placeholder="Email of Branch Admin "
                className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
                {...register("branchAdminEmail")}
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
                placeholder="Total number of labours"
                className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
                {...register("totalLabourNumber")}
              />
              <input
                type="tel"
                placeholder="Number of  female labours"
                className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
                {...register("femaleLabourNumber")}
              />

              <input
                type="tel"
                placeholder="Number of  contract labours"
                className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
                {...register("contractLabourNumber")}
              />
              <input
                type="tel"
                placeholder="Number of  migrant labours"
                className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
                {...register("migrantLabourNumber")}
              />

              <button
                className="w-full h-[56px] mt-6 bg-[#74CE3A] text-white text-[14px] font-semibold flex justify-center items-center"
                type="submit"
              >
                CONTINUE
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// Wrapping the component with ProtectedRoute
const ProtectedAddBranch = () => (
  <ProtectedRoute allowedRoles={["admin", "manager"]}>
    <AddBranch />
  </ProtectedRoute>
);

export default ProtectedAddBranch;
