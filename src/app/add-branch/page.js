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
  email: yup.string().required("Email is required"),
  mobileNo: yup.string().required("Mobile Number is required"),

  branchAdminName: yup.string().required("Branch admin name is required"),
  branchAdminMobileNo: yup
    .string()
    .required("Branch admin mobile number is required")
    .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits"),

  branchAdminEmail: yup.string().required("Branch admin email is required"),

  totalLabourNumber: yup.string().required("Total labour number is required"),
  femaleLabourNumber: yup
    .string()
    .required("Number of Female labours is required"),
  contractLabourNumber: yup
    .string()
    .required("Number of Contract labours is required"),
  migrantLabourNumber: yup
    .string()
    .required("Number of Migrant labours is required"),
});

function AddBranch() {
  const [isLoading, setIsLoading] = useState(true);
  const [businessTypeList, setBusinessTypesList] = useState({});

  const [caabId, setCaabId] = useState("");

  const { user, token, initializeUser } = useAuthStore();

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
          `${process.env.NEXT_PUBLIC_API_URL}/user/listBusinessType`,
          { headers: { Authorization: `Bearer ${token}` } },
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

  // useEffect(() => {
  //   initializeUser();
  // }, []);

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
        dataToSend,
        { headers: { Authorization: `Bearer ${token}` } },
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
        <div className="pt-6">
          <p className="text-[#707784] text-[14px]">
            <Link href={"/company-home"}>Home</Link>
            {">"} <Link href={"/add-branch"}>Add branch or company</Link>
          </p>

          <p className="text-[#181C22] text-[24px] font-semibold mt-4">
            Add Branch / Company
          </p>
        </div>
        <form
          className="w-full bg-white border-[1px] py-6 border-[#C2C6D4] rounded-lg px-4 mb-10  sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="">
            <h1 className="text-[#404753] text-[16px] border-b-[1px] border-[#C0C7D5]">
              Basic details
            </h1>

            <div className=" lg:ps-10 pt-4 flex flex-col gap-y-2">
              <div>
                <label className="text-[#404753] text-xs">Company Name</label>
                <input
                  type="text"
                  placeholder="Branch / Company name *"
                  className={`w-full h-11 px-3 text-sm bg-white placeholder:text-[#404753] rounded-lg text-black focus:outline-none focus:border-[#74CE3A] ${
                    errors.companyName
                      ? "border-2 border-red-500 "
                      : "border-[1px]  border-[#707784] "
                  }`}
                  {...register("companyName")}
                />
                <p className="text-red-500 text-xs">
                  {errors.companyName?.message || " "}
                </p>
              </div>

              <div>
                <label className="text-[#404753] text-xs">
                  City / Location
                </label>
                <input
                  type="text"
                  placeholder="City or Location *"
                  className={`w-full h-11 px-3 text-sm bg-white placeholder:text-[#404753] rounded-lg text-black focus:outline-none focus:border-[#74CE3A] ${
                    errors.location
                      ? "border-2 border-red-500 "
                      : "border-[1px]  border-[#707784]"
                  }`}
                  {...register("location")}
                />
                <p className="text-red-500 text-xs">
                  {errors.location?.message}
                </p>
              </div>

              <div>
                <label className="text-[#404753] text-xs">District</label>
                <select
                  placeholder="Select District *"
                  className={`w-full h-11 px-3 text-sm bg-white placeholder:text-[#404753] rounded-lg text-black focus:outline-none focus:border-[#74CE3A] ${
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
                <p className="text-red-500 text-xs">
                  {errors.district?.message}
                </p>
              </div>

              <div>
                <label className="text-[#404753] text-xs">Business Type</label>
                <select
                  placeholder="Select Buisness Type *"
                  className={`w-full h-11 px-3 text-sm bg-white placeholder:text-[#404753] rounded-lg text-black focus:outline-none focus:border-[#74CE3A] ${
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
              </div>

              <div>
                <label className="text-[#404753] text-xs">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className={`w-full h-11 px-3 text-sm bg-white placeholder:text-[#404753] rounded-lg text-black focus:outline-none focus:border-[#74CE3A] ${
                    errors.email
                      ? "border-2 border-red-500 "
                      : "border-[1px]  border-[#707784]"
                  }`}
                  {...register("email")}
                />
                <p className="text-red-500 text-xs">{errors.email?.message}</p>
              </div>

              <div>
                <label className="text-[#404753] text-xs">Mobile Number</label>
                <input
                  type="tel"
                  maxLength={10}
                  placeholder="Mobile Number"
                  className={`w-full h-11 px-3 text-sm bg-white placeholder:text-[#404753] rounded-lg text-black focus:outline-none focus:border-[#74CE3A] ${
                    errors.mobileNo
                      ? "border-2 border-red-500 "
                      : "border-[1px]  border-[#707784]"
                  }`}
                  {...register("mobileNo")}
                />
                <p className="text-red-500 text-xs">
                  {errors.mobileNo?.message}
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <h1 className="text-[#404753] text-[16px] border-b-[1px] border-[#C0C7D5] ">
              Branch Admin details
            </h1>

            <div className=" lg:ps-10 pt-3 flex flex-col gap-y-2">
              <div>
                <label className="text-[#404753] text-xs">
                  Branch admin name
                </label>
                <input
                  type="text"
                  placeholder="Name of Branch Admin *"
                  className={`w-full h-11 px-3 text-sm bg-white placeholder:text-[#404753] rounded-lg text-black focus:outline-none focus:border-[#74CE3A] ${
                    errors.branchAdminName
                      ? "border-2 border-red-500 "
                      : "border-[1px]  border-[#707784]"
                  }`}
                  {...register("branchAdminName")}
                />
                <p className="text-red-500 text-xs">
                  {errors.branchAdminName?.message}
                </p>
              </div>

              <div>
                <label className="text-[#404753] text-xs">
                  Branch Admin Mobile Number
                </label>
                <input
                  type="tel"
                  maxLength={10}
                  placeholder="Mobile Number of Branch Admin *"
                  className={`w-full h-11 px-3 text-sm bg-white placeholder:text-[#404753] rounded-lg text-black focus:outline-none focus:border-[#74CE3A] ${
                    errors.branchAdminMobileNo
                      ? "border-2 border-red-500 "
                      : "border-[1px]  border-[#707784]"
                  }`}
                  {...register("branchAdminMobileNo")}
                />
                <p className="text-red-500 text-xs">
                  {errors.branchAdminMobileNo?.message}
                </p>
              </div>

              <div>
                <label className="text-[#404753] text-xs">
                  Email (Branch Admin)
                </label>
                <input
                  type="email"
                  placeholder="Email of Branch Admin"
                  className={`w-full h-11 px-3 text-sm bg-white placeholder:text-[#404753] rounded-lg text-black focus:outline-none focus:border-[#74CE3A] ${
                    errors.branchAdminEmail
                      ? "border-2 border-red-500 "
                      : "border-[1px]  border-[#707784]"
                  }`}
                  {...register("branchAdminEmail")}
                />
                <p className="text-red-500 text-xs">
                  {errors.branchAdminEmail?.message}
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <h1 className="text-[#404753] text-[16px] border-b-[1px] border-[#C0C7D5]">
              Labour / Employee details
            </h1>

            <div className=" lg:ps-10 pt-3 flex flex-col gap-y-2">
              <div>
                <label className="text-[#404753] text-xs">
                  Total number of labours
                </label>
                <input
                  type="tel"
                  placeholder="Total number of labours"
                  className={`w-full h-11 px-3 text-sm bg-white placeholder:text-[#404753] rounded-lg text-black focus:outline-none focus:border-[#74CE3A] ${
                    errors.totalLabourNumber
                      ? "border-2 border-red-500 "
                      : "border-[1px]  border-[#707784]"
                  }`}
                  {...register("totalLabourNumber")}
                />
                <p className="text-red-500 text-xs">
                  {errors.totalLabourNumber?.message}
                </p>
              </div>
              <div>
                <label className="text-[#404753] text-xs">
                  Number of female labours
                </label>
                <input
                  type="tel"
                  placeholder="Number of  female labours"
                  className={`w-full h-11 px-3 text-sm bg-white placeholder:text-[#404753] rounded-lg text-black focus:outline-none focus:border-[#74CE3A] ${
                    errors.femaleLabourNumber
                      ? "border-2 border-red-500 "
                      : "border-[1px]  border-[#707784]"
                  }`}
                  {...register("femaleLabourNumber")}
                />
                <p className="text-red-500 text-xs">
                  {errors.femaleLabourNumber?.message}
                </p>
              </div>

              <div>
                <label className="text-[#404753] text-xs">
                  Number of contract labours
                </label>
                <input
                  type="tel"
                  placeholder="Number of  contract labours"
                  className={`w-full h-11 px-3 text-sm bg-white placeholder:text-[#404753] rounded-lg text-black focus:outline-none focus:border-[#74CE3A] ${
                    errors.contractLabourNumber
                      ? "border-2 border-red-500 "
                      : "border-[1px]  border-[#707784]"
                  }`}
                  {...register("contractLabourNumber")}
                />
                <p className="text-red-500 text-xs">
                  {errors.contractLabourNumber?.message}
                </p>
              </div>

              <div>
                <label className="text-[#404753] text-xs">
                  Number of migrant labours
                </label>
                <input
                  type="tel"
                  placeholder="Number of  migrant labours"
                  className={`w-full h-11 px-3 text-sm bg-white placeholder:text-[#404753] rounded-lg text-black focus:outline-none focus:border-[#74CE3A] ${
                    errors.migrantLabourNumber
                      ? "border-2 border-red-500 "
                      : "border-[1px]  border-[#707784]"
                  }`}
                  {...register("migrantLabourNumber")}
                />
                <p className="text-red-500 text-xs">
                  {errors.migrantLabourNumber?.message}
                </p>
              </div>

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
