"use client";
import Link from 'next/link';
import React from 'react'
import { BiLogoFacebookSquare, BiLogoInstagram, BiLogoLinkedinSquare } from "react-icons/bi";
import { MdLocationOn, MdMail, MdPhone } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";



function Footer() {
  return (
    <footer className='px-4 md:px-8 lg:px-[72px] py-[72px] text-white bg-gradient-to-b from-[#191C21] to-[#667387]'>
        {/* Grid  */}
        <div className='w-full grid  md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 lg:gap-6'>
            <div className=''>
                <h3 className='font-bold text-2xl leading-6'>Contact Us</h3>
                <p className='mt-8 font-normal text-base leading-6'>
                    Ready to take your corporate compliance to the next level? 
                    Contact us today to learn and beneficial with 'CAABScore' solution and how we can help you achieve your compliance goals at excellence version.
                </p>
            </div>
            <div className=''>
                <h3 className='font-bold text-2xl leading-6'>Reach us through</h3>
                <div className='w-full mt-8 flex flex-col gap-5'>
                    <div className='flex items-center gap-3'>
                        <span><MdPhone className='text-2xl text-[#ABC7FF]'/></span>
                        <span>+91 7736634226</span>
                    </div>
                    <div className='flex items-start gap-3'>
                        <span><MdMail className='text-2xl text-[#ABC7FF]'/></span>
                        <span>info@caabscore.com</span>
                    </div>
                    <div className='flex items-start gap-3'>
                        <span><MdLocationOn className='text-2xl text-[#ABC7FF]'/></span>
                        <div className='flex flex-col'>
                            <span>Ground Floor, Raiban Shopping Complex,</span>
                            <span>Palace Road, Alappuzha</span>
                            <span>Kerala 688001</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-6'>
                        <a href="/" className='size-[30px]'>
                            <BiLogoFacebookSquare className='m-0 text-3xl hover:text-[#3D5A98] hover:bg-white' />   
                        </a>
                        <Link href="/">
                            <BiLogoInstagram className='text-3xl' />   
                        </Link>
                        <Link href="/">
                            <BiLogoLinkedinSquare className='text-3xl hover:text-[#0A66C2] hover:bg-white' />   
                        </Link>
                        <Link href="/">
                            <BsTwitterX className='text-xl' />   
                        </Link>
                    </div>
                </div>
            </div>
            <div className=''>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3935.2001121928406!2d76.33492147502457!3d9.491316990589626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMjknMjguNyJOIDc2wrAyMCcxNS4wIkU!5e0!3m2!1sen!2sin!4v1729891158854!5m2!1sen!2sin" 
                    className='w-full h-[250px] sm:h-[400px] md:h-[280px] border-none rounded-lg' 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer