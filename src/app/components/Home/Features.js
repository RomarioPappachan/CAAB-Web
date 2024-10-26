// "use client";
// import React from "react";

// const Features = () => {
//   return (
//     <div className="w-full mt-5 m-0 pt-10 pb-20 px-24">
//       <h2 className="text-[#181c22] font-medium text-5xl text-center">
//         Benefits of working with us
//       </h2>
//       <div className="w-full pt-28 flex justify-between items-center">

//         {/* feature 1  */}
//         <div className="w-[320px] h-[360px] px-5 bg-[#F1F3FC] border-[1px] border-[#224167] rounded-lg flex flex-col justify-center items-center relative">
//           <img
//             src="/feature-flexible.svg"
//             alt="flexible scheduling"
//             className="size-[140px] absolute -top-[70px]"
//           />
//           <h1 className="mt-4 text-[#224167] text-[32px]">Flexible </h1>
//           <h1 className=" text-[#224167] text-[32px]">Scheduling </h1>
//           <p className="mt-5 text-[#404753] text-base flex justify-center items-center text-center">
//             Allows firms to adjust their work hours or location, improving
//             work-life balance and productivity.
//           </p>
//         </div>

//         {/* feature 2  */}
//         <div className="w-[320px] h-[360px] px-5 bg-[#F1F3FC] border-[1px] border-[#224167] rounded-lg flex flex-col justify-center items-center relative">
//           <img
//             src="/feature-growth.svg"
//             alt="flexible scheduling"
//             className="size-[140px] absolute -top-[70px]"
//           />
//           <h1 className="mt-4 text-[#224167] text-[32px]">Opportunity for</h1>
//           <h1 className=" text-[#224167] text-[32px]">Growth </h1>
//           <p className="mt-5 text-[#404753] text-base flex justify-center items-center text-center">
//           Expanding into product development or diversifying services can drive growth for a service-based company.
//           </p>
//         </div>

//         {/* feature 3  */}
//         <div className="w-[320px] h-[360px] px-5 bg-[#F1F3FC] border-[1px] border-[#224167] rounded-lg flex flex-col justify-center items-center relative">
//           <img
//             src="/feature-brand.svg"
//             alt="flexible scheduling"
//             className="size-[140px] absolute -top-[70px]"
//           />
//           <h1 className="mt-4 text-[#224167] text-[32px]">Strengthen Brand </h1>
//           <h1 className=" text-[#224167] text-[32px]">Reputation</h1>
//           <p className="mt-5 text-[#404753] text-base flex justify-center items-center text-center">
//           Builds trust, enhances customer loyalty, and drives business success through ethical and transparent practices.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Features;


"use client";
import React, { useEffect, useRef, useState } from "react";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const featureRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset when section is out of view
        }
      },
      { threshold: 0.2 } // Trigger when 40% of the section is in view
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, []);

  return (
    <div ref={featureRef} className="w-full m-0 mt-5 pt-10 pb-20 px-5 sm:px10 md:px-16 lg:px-24">
      <h2 className="text-[#181c22] font-medium text-4xl lg:text-5xl text-center">
        Benefits of working with us
      </h2>
      <div className="w-full pt-28 flex flex-col md:flex-row justify-between items-center gap-x-5 gap-y-20">

        {/* feature 1 */}
        <div
          className={`w-[320px] h-[360px] mb-50 md:mb-0 px-5 bg-[#F1F3FC] border-[1px] border-[#224167] rounded-lg flex flex-col justify-center items-center relative transition-transform duration-1000 ease-in-out ${
            isVisible ? "translate-x-0" : "-translate-x-[200%] md:-translate-x-[200%]"
          }`}
        >
          <img
            src="/feature-flexible.svg"
            alt="flexible scheduling"
            className="size-[100px] lg:size-[140px] absolute -top-[50px] lg:-top-[70px]"
          />
          <h1 className="text-center text-[#224167] text-2xl lg:text-[32px]">Flexible Scheduling</h1>
          {/* <h1 className=" text-[#224167] text-[32px]"> </h1> */}
          <p className="mt-5 text-[#404753] text-base flex justify-center items-center text-center">
            Allows firms to adjust their work hours or location, improving
            work-life balance and productivity.
          </p>
        </div>

        {/* feature 2 */}
        <div
          className={`w-[320px] h-[360px] mb-50 md:mb-0 px-5 bg-[#F1F3FC] border-[1px] border-[#224167] rounded-lg flex flex-col justify-center items-center relative transition-transform duration-1000 ease-in-out delay-200 ${
            isVisible ? "translate-x-0" : "-translate-x-[200%] md:-translate-x-[300%]"
          }`}
        >
          <img
            src="/feature-growth.svg"
            alt="flexible scheduling"
            className="size-[100px] lg:size-[140px] absolute -top-[50px] lg:-top-[70px]"
          />
          <h1 className="text-center text-[#224167] text-2xl lg:text-[32px]">Opportunity for Growth</h1>
          {/* <h1 className=" text-[#224167] text-[32px]">Growth </h1> */}
          <p className="mt-5 text-[#404753] text-base flex justify-center items-center text-center">
            Expanding into product development or diversifying services can drive
            growth for a service-based company.
          </p>
        </div>

        {/* feature 3 */}
        <div
          className={`w-[320px] h-[360px] mb-50 md:mb-0 px-5 bg-[#F1F3FC] border-[1px] border-[#224167] rounded-lg flex flex-col justify-center items-center relative transition-transform duration-1000 ease-in-out delay-400 ${
            isVisible ? "translate-x-0" : "-translate-x-[200%] md:-translate-x-[400%]"
          }`}
        >
          <img
            src="/feature-brand.svg"
            alt="flexible scheduling"
            className="size-[100px] lg:size-[140px] absolute -top-[50px] lg:-top-[70px]"
          />
          <h1 className="text-center text-[#224167] text-2xl lg:text-[32px]">Strengthen Brand Reputation</h1>
          {/* <h1 className=" text-[#224167] text-[32px]">Reputation</h1> */}
          <p className="mt-5 text-[#404753] text-base flex justify-center items-center text-center">
            Builds trust, enhances customer loyalty, and drives business success
            through ethical and transparent practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
