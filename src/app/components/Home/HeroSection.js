"use client";
import React from 'react'

function HeroSection() {
  return (
    <div className='w-full h-[560px] px-4 md:px-8 lg:px-[72px] bg-home-page flex flex-col md:flex-row gap-6'>
      <div className='w-full md:w-3/5 pt-10 md:pt-24'>
        <div className='w-full h-[120px] md:h-[150px] lg:h-[200px] xl:h-[296px] flex flex-col justify-between gap-y-10'>
          <h1 className='w-full sm:w-3/4 md:w-full text-[#003E82] text-wrap text-3xl md:text-5xl font-bold leading-8'>
            "Your Trusted Partner for Corporate  Compliance & Innovation."
          </h1>
          <p className='text-[#003E82] w-full md:text-base lg:text-2xl font-medium leading-4 md:leading-6'>
            Introducing CAABScore - The First-Ever <br /> Corporate Compliance Rating
          </p>
        </div>
      </div>
      <div className='w-full md:w-2/5 relative'>
        <img 
          src="/hero-section-image.svg" 
          alt="hero section image" 
          className='size-96 lg:size-auto lg:w-full absolute sm:right-0 md:bottom-8 md:right-0 lg:-bottom-2 lg:right-4 xl:right-8 xl:-bottom-12' 
        />
      </div>
    </div>
  )
}

export default HeroSection;