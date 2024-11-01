"use client";
import React from 'react'

function OurApproachSection() {
  return (
    <div className='px-4 md:px-8 lg:px-[72px] pt-20 pb-11 bg-white'>

        {/* Our approach & Expert Guidance & Advice  */}
        <div className='m-0 grid grid-cols-1 xl:grid-cols-2 gap-y-10 gap-x-8'>

            <div className='translate-left'>
                <h1 className='h-10 text-center font-medium text-[#191C21] text-[32px]'>Our Approach</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10'>
                    
                    <div className='w-full p-4 rounded-2xl border-[#C2C6D4] border-[1px] flex justify-center items-start shadow drop-shadow-sm'>
                        <div className='w-1/5 h-full'>
                            <img 
                                src="/assessment.svg" 
                                alt="Assessment" 
                                className='size-14'    
                            />
                        </div>
                        <div className='w-4/5 ps-2 flex flex-col gap-2'>
                            <h3 className='h-6 font-medium text-xl text-[#191C21]'>Assessment</h3>
                            <p className='text-[#424752] text-sm leading-6'>We conduct a thorough assessment of your current compliance practices and identify areas for improvement.</p>
                        </div>
                    </div>

                    <div className='w-full p-4 rounded-2xl border-[#C2C6D4] border-[1px] flex justify-center items-start shadow drop-shadow-sm'>
                        <div className='w-1/5 h-full'>
                            <img 
                                src="/planning.svg" 
                                alt="Planning" 
                                className='size-14'    
                            />
                        </div>
                        <div className='w-4/5 ps-2 flex flex-col gap-2'>
                            <h3 className='h-6 font-medium text-xl text-[#191C21]'>Planning</h3>
                            <p className='text-[#424752] text-sm leading-6'>We develop a customized compliance plan tailored to your specific industry, size, and risk profile.</p>
                        </div>
                    </div>

                    <div className='w-full p-4 rounded-2xl border-[#C2C6D4] border-[1px] flex justify-center items-start shadow drop-shadow-sm'>
                        <div className='w-1/5 h-full'>
                            <img 
                                src="/implementation.svg" 
                                alt="Implementation" 
                                className='size-14'    
                            />
                        </div>
                        <div className='w-4/5 ps-2 flex flex-col gap-2'>
                            <h3 className='h-6 font-medium text-xl text-[#191C21]'>Implementation</h3>
                            <p className='text-[#424752] text-sm leading-6'>We implement the compliance plan, providing guidance, training, and ongoing support to ensure successful integration.</p>
                        </div>
                    </div>

                    <div className='w-full p-4 rounded-2xl border-[#C2C6D4] border-[1px] flex justify-center items-start shadow drop-shadow-sm'>
                        <div className='w-1/5 h-full'>
                            <img 
                                src="/monitoring.svg" 
                                alt="Monitoring" 
                                className='size-14'    
                            />
                        </div>
                        <div className='w-4/5 ps-2 flex flex-col gap-2'>
                            <h3 className='h-6 font-medium text-xl text-[#191C21]'>Monitoring</h3>
                            <p className='text-[#424752] text-sm leading-6'>We conduct a thorough assessment of your current compliance practices and identify areas for improvement.</p>
                        </div>
                    </div>

                     
                </div>
                 
            </div>

            <div className=''>
                <h1 className='xl:h-10 text-center font-medium text-[#191C21] text-[32px]'>Expert Guidance and Advice</h1>
                <p className='text-base font-normal text-[#424752] leading-10 mt-10'>
                    Our team of experienced compliance professionals provides tailored solutions to meet your specific needs. 
                    We leverage cutting-edge technology to streamline compliance processes and minimize risks.<br/>
                    CAAB is more than just a corporate compliance service provider. We are a trusted advisor and partner committed to your long-term success. 
                    We understand that compliance is not a one-size-fits-all approach, and we tailor our solutions to meet your unique needs. 
                    Let us guide you towards a more compliant and confident future in your corporate navigation.
                </p>
            </div>

        </div>


        {/* Data Analytics and Reporting & Our Values  */}
        <div className='m-0 pt-20 grid grid-cols-1 xl:grid-cols-2 gap-y-10 gap-x-8'>

            <div className=''>
                <h1 className='xl:h-10 text-center font-medium text-[#191C21] text-[32px]'>Data Analytics and Reporting</h1>
                <p className='text-base font-normal text-[#424752] leading-10 mt-10'>
                    'CAABScore' gain valuable insights into your compliance performance through comprehensive data visualization and reporting tools. Therefore, the 'CAABScore' shall used by the stakeholders to rate your corporate compliance attitudes and commitment to Corporate Compliance Social Responsibility.
                </p>
            </div>

            <div className='translate-right'>
                <h1 className='h-10 text-center font-medium text-[#191C21] text-[32px]'>Our Values</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10'>
                    
                    <div className='w-full p-4 rounded-2xl border-[#C2C6D4] border-[1px] flex justify-center items-start shadow drop-shadow-sm'>
                        <div className='w-1/5 h-full'>
                            <img 
                                src="/transparency.svg" 
                                alt="Transparency" 
                                className='size-14'    
                            />
                        </div>
                        <div className='w-4/5 ps-2 flex flex-col gap-2'>
                            <h3 className='h-6 font-medium text-xl text-[#191C21]'>Transparency</h3>
                            <p className='text-[#424752] text-sm leading-6'>We are transparent in our communication and operations, building trust with our clients and stakeholders.</p>
                        </div>
                    </div>

                    <div className='w-full p-4 rounded-2xl border-[#C2C6D4] border-[1px] flex justify-center items-start shadow drop-shadow-sm'>
                        <div className='w-1/5 h-full'>
                            <img 
                                src="/integrity.svg" 
                                alt="Integrity" 
                                className='size-14'    
                            />
                        </div>
                        <div className='w-4/5 ps-2 flex flex-col gap-2'>
                            <h3 className='h-6 font-medium text-xl text-[#191C21]'>Integrity</h3>
                            <p className='text-[#424752] text-sm leading-6'>We uphold the highest ethical standards in all our dealings, ensuring fairness and accountability.</p>
                        </div>
                    </div>

                    <div className='w-full p-4 rounded-2xl border-[#C2C6D4] border-[1px] flex justify-center items-start shadow drop-shadow-sm'>
                        <div className='w-1/5 h-full'>
                            <img 
                                src="/innovation.svg" 
                                alt="Innovation" 
                                className='size-14'    
                            />
                        </div>
                        <div className='w-4/5 ps-2 flex flex-col gap-2'>
                            <h3 className='h-6 font-medium text-xl text-[#191C21]'>Innovation</h3>
                            <p className='text-[#424752] text-sm leading-6'>We embrace innovation to develop cutting-edge solutions that meet evolving compliance needs.</p>
                        </div>
                    </div>

                    <div className='w-full p-4 rounded-2xl border-[#C2C6D4] border-[1px] flex justify-center items-start shadow drop-shadow-sm'>
                        <div className='w-1/5 h-full'>
                            <img 
                                src="/partnership.svg" 
                                alt="Partnership" 
                                className='size-14'    
                            />
                        </div>
                        <div className='w-4/5 ps-2 flex flex-col gap-2'>
                            <h3 className='h-6 font-medium text-xl text-[#191C21]'>Partnership</h3>
                            <p className='text-[#424752] text-sm leading-6'>We believe in collaborative partnerships, working closely with our clients to achieve shared goals.</p>
                        </div>
                    </div>

                     
                </div>
                 
            </div>


        </div>

        
    </div>
  )
}

export default OurApproachSection