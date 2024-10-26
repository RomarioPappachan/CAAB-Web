"use client";
import React from 'react'

function OurTeamSection() {
  return (
    <div className='px-4 md:px-8 lg:px-20 xl:px-24 py-11'>
        <div className='flex flex-col xl:flex-row gap-6'>
            <div className='w-full xl:w-2/3 px-6 py-4 bg-[#CBDBFF] rounded-2xl flex flex-col gap-y-10'>
                <h1 className='text-[32px] text-[#003E82] font-medium leading-10'>OUR TEAM</h1>
                <div className='flex flex-col sm:flex-row gap-10'>
                    <div className='sm:w-1/3 flex flex-col items-center gap-4'>
                        <img 
                            src="/caab-score-logo.svg" 
                            alt="" 
                            className='size-[160px] xl:size-[200px] 2xl:size-[240px]  rounded-full border-[#003E82] border-2'
                        />
                        <div className='text-center'>
                            <span className='text-[#003E82] text-base leading-6'>Sri. A Alexander IAS , Former Labour Commissioner - Panel Head</span>
                        </div>
                    </div>
                    <div className='sm:w-2/3'>
                        <ol className='text-[#314364] font-normal text-base leading-10 list-inside list list-disc'>
                            <li>
                                CAAB TEAM has a proven track record of success in helping businesses across various industries navigate complex compliance challenges.
                            </li>
                            <li>
                                Our TEAM comprises experienced compliance professionals, technologists, and legal experts dedicated to providing exceptional service and innovative solutions.
                            </li>
                            <li>
                                We are committed to continuous improvement and stay ahead of the curve by actively monitoring regulatory changes and implementing best practices.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className='w-full xl:w-1/3 py-4 flex flex-col gap-10'>
                <h1 className='text-[32px] text-[#191C21] font-medium leading-10'>Data-Driven Insights</h1>
                <p className='text-base text-[#424752] font-normal leading-10'>
                    The 'CAAB Score' is based on a robust data analysis methodology, 
                    providing actionable insights to enhance your compliance program and 
                    our expert TEAM recommendations to achieve better score and minimize the non-compliance risk which leads to ZERO TOLERANCE.
                    The 'CAAB Score' allows you to track your progress over time, identify improvement areas,
                    and demonstrate your commitment to compliance to stakeholders.
                </p>
            </div>
        </div>
    </div>
  )
}

export default OurTeamSection