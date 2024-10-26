"use client";
import React from 'react'

function RoleSection() {
  return (
    <div className='w-full h-auto lg:h-[544px] bg-[#003E82] p-4 sm:p-8 lg:p-12'>
      <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl text-white px-2'>
        CAABScore and the role of CorpRank
      </h1>
      <p className='text-base md:text-lg lg:text-xl text-white px-2 pt-4 md:pt-6 lg:pt-10'>
        CAAB integrates compliance, ethics, and social responsibility into corporate operations, ensuring companies operate responsibly, ethically, and lawfully with regulatory mandates.
      </p>

      <div className='w-full flex flex-col lg:flex-row mt-12 gap-x-8'>
        {/* Column 1 */}
        <div className='w-full lg:w-1/3  '>
          <div className='h-14  flex items-start mb-4'>
            <div className='w-6 h-6 rounded-full bg-[#2262B7] flex justify-center items-center text-white'>1</div>
            <div className='text-white text-lg md:text-xl ps-3'>Reduced regulatory risks</div>
          </div>
          <div className='h-14 flex items-start mb-4'>
            <div className='w-6 h-6 rounded-full bg-[#2262B7] flex justify-center items-center text-white'>2</div>
            <p className='text-white text-lg md:text-xl ps-3'>Enhanced brand reputation and trust</p>
          </div>
          <div className='h-14 flex items-start mb-4'>
            <div className='w-6 h-6 rounded-full bg-[#2262B7] flex justify-center items-center text-white'>3</div>
            <p className='text-white text-lg md:text-xl ps-3'>Improved stakeholder relationships</p>
          </div>
          <div className='h-14 flex items-start mb-4'>
            <div className='w-6 h-6 rounded-full bg-[#2262B7] flex justify-center items-center text-white'>4</div>
            <p className='text-white text-lg md:text-xl ps-3'>Increased employee engagement and retention</p>
          </div>
        </div>

        {/* Column 2 */}
        <div className='w-full lg:w-1/3 '>
          <div className='h-14 flex items-start mb-4'>
            <div className='w-6 h-6 rounded-full bg-[#2262B7] flex justify-center items-center text-white'>5</div>
            <p className='text-white text-lg md:text-xl ps-3'>Better risk management</p>
          </div>
          <div className='h-14 flex items-start mb-4'>
            <div className='w-6 h-6 rounded-full bg-[#2262B7] flex justify-center items-center text-white'>6</div>
            <p className='text-white text-lg md:text-xl ps-3'>Access to capital and investment</p>
          </div>
          <div className='h-14 flex items-start mb-4'>
            <div className='w-6 h-6 rounded-full bg-[#2262B7] flex justify-center items-center text-white'>7</div>
            <p className='text-white text-lg md:text-xl ps-3'>Easy regulatory compliance and assessment</p>
          </div>
          <div className='h-14 flex items-start mb-4'>
            <div className='w-6 h-6 rounded-full bg-[#2262B7] flex justify-center items-center text-white'>8</div>
            <p className='text-white text-lg md:text-xl ps-3'>Talent attraction and retention</p>
          </div>
        </div>

        {/* Column 3 */}
        <div className='w-full lg:w-1/3'>
          <div className='h-14 flex items-start mb-4'>
            <div className='w-6 h-6 rounded-full bg-[#2262B7] flex justify-center items-center text-white'>9</div>
            <p className='text-white text-lg md:text-xl ps-3'>Increased business opportunities</p>
          </div>
          <div className='h-14 flex items-start mb-4'>
            <div className='w-6 h-6 rounded-full bg-[#2262B7] flex justify-center items-center text-white'>10</div>
            <p className='text-white text-lg md:text-xl ps-3'>Non compliance risk mitigation</p>
          </div>
          <div className='h-14 flex items-start mb-4'>
            <div className='w-6 h-6 rounded-full bg-[#2262B7] flex justify-center items-center text-white'>11</div>
            <p className='text-white text-lg md:text-xl ps-3'>Cost savings through streamlined compliance</p>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default RoleSection;