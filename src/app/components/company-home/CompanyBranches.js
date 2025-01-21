"use client";
import React, { useEffect, useState } from "react";
import CompanyBranchCard from "./CompanyBranchCard";
import axios from "axios";

function CompanyBranches({ caabId }) {
  const [companyBranches, setCompanyBranches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/user/listBranches/${caabId}`
        );

        setCompanyBranches(response.data.branches);
      } catch (error) {
        console.error("Error fetching data:", error);
        // toast.error("Error fetching data.");\
      }
    };

    fetchData();
  }, []);

  return (
    <div className="py-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
      {companyBranches[0] &&
        companyBranches.map((branch) => (
          <CompanyBranchCard key={branch.id} branch={branch} />
        ))}
    </div>
  );
}

export default CompanyBranches;