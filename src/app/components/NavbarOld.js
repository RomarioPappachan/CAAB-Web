"use client";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const NavbarOld = () => {
  return (
    <div className='w-full m-0 py-5 pt-12 px-24 flex justify-between items-center'>
        <div className="w-2/3 lg:w-1/2">
            <Image 
                src="/logo-and-brand.svg" 
                className=''
                width="230"
                height="230"
                alt='Logo'
            />
        </div>
        <div className="lg:w-[608px] flex justify-between items-center">
            <div className='w-[423px] h-10 bg-white text-[#005193] text-base font-bold leading-6 rounded-2xl flex justify-around items-center'>
                <div className='w-full h-full flex justify-center items-center'>
                    <Link href="/">Check Rating</Link>
                </div>
                <div className='w-full h-full border-[#707784] border-x-[1px] flex justify-center items-center'>
                    <Link href="/">Improve Rating</Link>
                </div>
                <div className='w-full h-full flex justify-center items-center'>
                    <Link href="/about-us">Contact Us</Link>
                </div>
            </div>
            <div>
                <button
                    className='w-[145px] h-10 bg-[#782A99] text-white text-base font-semibold rounded-2xl'
                >
                    Login / SignUp
                </button>
            </div>
        </div>

    </div>
  )
}

export default NavbarOld