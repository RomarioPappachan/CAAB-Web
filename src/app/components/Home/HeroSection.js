"use client";
import React from 'react'

function HeroSection() {
  return (
    <div className='w-full h-[560px] bg-home-page flex flex-col md:flex-row px-4 md:px-8 lg:px-20 xl:px-24'>
      <div className='w-full md:w-3/5 pt-24'>
        <div className='w-auto md:w-[800px] h-[120px] md:h-[150px] lg:h-[200px] xl:h-[296px] flex flex-col justify-between'>
          <h1 className='text-[#003E82]  sm:ps-20 md:ps-0 w-auto text-2xl lg:text-5xl md:text-3xl font-bold leading-8 md:leading-[30px]'>
            "Your Trusted Partner for Corporate  Compliance & Innovation."
          </h1>
          <p className='text-[#003E82]  sm:ps-20 md:p-0 w-auto md:text-base lg:text-2xl font-medium leading-4 md:leading-6'>
            Introducing CAABScore - The First-Ever <br /> Corporate Compliance Rating
          </p>
        </div>
      </div>
      <div className='w-full sm:ps-20 md:w-2/5 relative'>
        <img src="/hero-section-image.svg" alt="hero sectionimage" className='size-96 md:size-auto absolute md:top-36 md:right-20 lg:right-0 lg:bottom-0 xl:right-4 xl:top-16' />
      </div>
    </div>
  )
}

export default HeroSection;