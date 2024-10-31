"use client";
import React from 'react'

function FeatureSection() {
  return (
    <div className='px-4 md:px-8 lg:px-[72px] py-11 bg-white block-animation'>
        <div className='flex flex-col xl:flex-row gap-6'>
            <div className='w-full xl:w-2/3 py-[68px]'>
                {/* grid */}
                <div className='grid sm:grid-cols-2 xl:grid-rows-4 xl:grid-cols-6 gap-10'>  
                    <div className='xl:row-start-1 xl:row-span-2 xl:col-start-1 xl:col-span-2 w-full p-4 rounded-2xl border-[#C2C6D4] border-[1px] flex justify-center items-center shadow drop-shadow-sm'>
                        <div className='w-full flex flex-col items-center gap-2'>
                            <h3 className='h-6 font-medium text-xl text-[#191C21]'>Integrity</h3>
                            <p className='text-[#424752] text-sm leading-6 text-center'>
                                We promote a culture of ethical conduct and transparency, ensuring organizations operate with the highest standards of integrity.
                            </p>
                        </div>
                    </div>
                    <div className='xl:row-start-1 xl:row-span-2 xl:col-start-3 xl:col-span-2 w-full p-4 rounded-2xl border-[#C2C6D4] border-[1px] flex justify-center items-center shadow drop-shadow-sm'>
                        <div className='w-full flex flex-col items-center gap-2'>
                            <h3 className='h-6 font-medium text-xl text-[#191C21]'>Growth</h3>
                            <p className='text-[#424752] text-sm leading-6 text-center'>
                                We support organizations in achieving sustainable growth by mitigating compliance risks and fostering a strong corporate governance framework.
                            </p>
                        </div>
                    </div>
                    <div className='xl:row-start-2 xl:row-span-2 xl:col-start-5 xl:col-span-2 w-full p-4 rounded-2xl border-[#C2C6D4] border-[1px] flex justify-center items-center shadow drop-shadow-sm'>
                        <div className='w-full flex flex-col items-center gap-2'>
                            <h3 className='h-6 font-medium text-xl text-[#191C21]'>Our Mission</h3>
                            <p className='text-[#424752] text-sm leading-6 text-center'>
                                Fostering CORPORATE COMPLIANCE SOCIAL RESPONSIBILTY culture and empower organizations to achieve compliance excellence, of ethical conduct and regulatory adherence.
                            </p>
                        </div>
                    </div>
                    <div className='xl:row-start-3 xl:row-span-2 xl:col-start-1 xl:col-span-2 w-full p-4 rounded-2xl border-[#C2C6D4] border-[1px] flex justify-center items-center shadow drop-shadow-sm'>
                        <div className='w-full flex flex-col items-center gap-2'>
                            <h3 className='h-6 font-medium text-xl text-[#191C21]'>Client-Focused</h3>
                            <p className='text-[#424752] text-sm leading-6 text-center'>
                                We are committed to providing exceptional customer service and building long-term relationships with our clients.
                            </p>
                        </div>
                    </div>
                    <div className='xl:row-start-3 xl:row-span-2 xl:col-start-3 xl:col-span-2 w-full p-4 rounded-2xl border-[#C2C6D4] border-[1px] flex justify-center items-center shadow drop-shadow-sm'>
                        <div className='w-full flex flex-col items-center gap-2'>
                            <h3 className='h-6 font-medium text-xl text-[#191C21]'>Empowerment</h3>
                            <p className='text-[#424752] text-sm leading-6 text-center'>
                                We equip organizations with the knowledge and tools to make informed decisions and navigate complex regulatory landscapes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full xl:w-1/3 flex items-center'>
                <img 
                    src="/team-goals.svg" 
                    alt="Team Goals" 
                    className='w-full'
                />
            </div>
        </div>

    </div>
  )
}

export default FeatureSection