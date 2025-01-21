import React from "react";
import SubmitDetails from "../components/submit-details/SubmitDetails";
import Navbar from "../components/Navbar";
import CompanyLabel from "../components/submit-details/CompanyLabel";

function SubmitDocuments() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-full mt-[100px] md:mt-[130px] xl:mt-[152px] bg-[#F9F9FF] px-4 md:px-8 lg:px-[72px] pb-20">
        <p className="text-[#707784] text-[14px] py-10">
          Home {">"} Company or Branch name {">"} Update laws
        </p>
        <CompanyLabel />

        <SubmitDetails />
      </div>
    </div>
  );
}
export default SubmitDocuments;
