"use client";
import React from 'react'

function RoleSection() {
  return (
    <div className='w-full bg-[#003E82] text-white px-4 md:px-8 lg:px-[72px] py-[72px] flex flex-col gap-y-10 block-animation'>
      <div className='w-full flex flex-col gap-y-6'>
        <h2 className='font-bold text-4xl leading-10 text-white'>
          CAABScore and the role of CorpRank
        </h2>
        <p className='text-xl font-normal leading-10 text-white'>
          CAAB integrates compliance, ethics, and social responsibility into corporate operations, ensuring companies operate responsibly,
          ethically, and lawfully with regulatory mandates.
        </p>
      </div>

      <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-6'>

        <div className='w-full m-0 p-0 flex flex-col gap-y-6'>
          <div className='h-14 flex justify-start items-start gap-2'>
            <div className='size-6 text-xl bg-[#2262B7] rounded-full flex justify-center items-center'>1</div>
            <div className='text-xl flex justify-start items-start'>Reduced regulatory risks</div>
          </div>
          <div className='h-14 flex justify-start items-start gap-2'>
            <div className='size-6 text-xl bg-[#2262B7] rounded-full flex justify-center items-center'>2</div>
            <div className='text-xl flex justify-start items-start'>Enhanced brand reputation and trust</div>
          </div>
          <div className='h-14 flex justify-start items-start gap-2'>
            <div className='size-6 text-xl bg-[#2262B7] rounded-full flex justify-center items-center'>3</div>
            <div className='text-xl flex justify-start items-start'>Improved stakeholder relationships</div>
          </div>
          <div className='h-14 flex justify-start items-start gap-2'>
            <div className='size-6 text-xl bg-[#2262B7] rounded-full flex justify-center items-center'>4</div>
            <div className='text-xl flex justify-start items-start'>Increased employee engagement and retention</div>
          </div>
        </div>

        <div className='w-full m-0 p-0 flex flex-col gap-y-6'>
          <div className='h-14 flex justify-start items-start gap-2'>
            <div className='size-6 text-xl bg-[#2262B7] rounded-full flex justify-center items-center'>5</div>
            <div className='text-xl flex justify-start items-start'>Better risk management</div>
          </div>
          <div className='h-14 flex justify-start items-start gap-2'>
            <div className='size-6 text-xl bg-[#2262B7] rounded-full flex justify-center items-center'>6</div>
            <div className='text-xl flex justify-start items-start'>Access to capital and investment</div>
          </div>
          <div className='h-14 flex justify-start items-start gap-2'>
            <div className='size-6 text-xl bg-[#2262B7] rounded-full flex justify-center items-center'>7</div>
            <div className='text-xl flex justify-start items-start'>Easy regulatory compliance and assessment</div>
          </div>
          <div className='h-14 flex justify-start items-start gap-2'>
            <div className='size-6 text-xl bg-[#2262B7] rounded-full flex justify-center items-center'>8</div>
            <div className='text-xl flex justify-start items-start'>Talent attraction and retention</div>
          </div>
        </div>

        <div className='w-full m-0 p-0 flex flex-col gap-y-6'>
          <div className='h-14 flex justify-start items-start gap-2'>
            <div className='size-6 text-xl bg-[#2262B7] rounded-full flex justify-center items-center'>9</div>
            <div className='text-xl flex justify-start items-start'>Increased business opportunities</div>
          </div>
          <div className='h-14 flex justify-start items-start gap-2'>
            <div className='size-6 text-xl bg-[#2262B7] rounded-full flex justify-center items-center'>10</div>
            <div className='text-xl flex justify-start items-start'>Non compliance risk mitigation</div>
          </div>
          <div className='h-14 flex justify-start items-start gap-2'>
            <div className='size-6 text-xl bg-[#2262B7] rounded-full flex justify-center items-center'>11</div>
            <div className='text-xl flex justify-start items-start'>Cost savings through streamlined compliance</div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default RoleSection;