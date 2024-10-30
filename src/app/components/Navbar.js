"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BiLogoFacebookSquare, BiLogoInstagram, BiLogoLinkedinSquare } from "react-icons/bi";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { MdMail, MdPhone } from "react-icons/md";
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isFacebookHovered, setIsFacebookHovered] = useState(false);
    const [isInstagramHovered, setIsInstagramHovered] = useState(false);
    const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
    const [isTwitterHovered, setIsTwitterHovered] = useState(false);


    const pathName = usePathname();

    function handleCloseDrawer() {
        document.getElementById("my-drawer-4").checked = false;
    };

  return (
    <nav className='w-full m-0 px-4 md:px-8 lg:px-[72px] bg-white border-[#C2C6D4] border-b-[1px] fixed top-0 z-10'>

        {/* Nav with logo  */}
        <div className='w-full h-[100px] md:h-[130px] xl:h-[152px] flex justify-between items-center'>

            <div className='w-1/4 md:w-1/5 xl:w-2/5 h-full flex justify-start items-center'>
                <Link 
                    href="/"
                    className='w-full md:w-3/4 xl:w-1/2'    
                >
                    <img    
                        src="/caab-score-logo.svg" 
                        alt="" 
                        className="w-full"
                    />
                </Link>
                
            </div>  {/* end of image container */}



            {/* this div is only displayed for width upto 768px (md:)  */}
            <div className='w-3/4 md:w-4/5 md:hidden h-full flex justify-end items-center gap-4'>
              <button className='h-7 sm:h-10 px-4 py-2 bg-[#74CE3A] text-white text-[10px] sm:text-base font-semibold rounded-2xl flex justify-center items-center'>
                Login / SignUp
              </button>
              <div className="drawer drawer-end w-10">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                  {/* Page content here */}
                  <label htmlFor="my-drawer-4" className="drawer-button text-right text-4xl sm:text-5xl text-[#003E82]">
                    <IoMenuOutline />
                  </label>
                </div>
                <div className="drawer-side z-50">
                  <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                  
                  <ul className="menu bg-white  min-h-full w-4/5 p-4">
                    {/* Sidebar content here */}
                    <div className='w-full mb-10 relative'>
                        <img 
                            src="/caab-score-logo.svg" alt="" 
                            className='w-1/3 sm:w-1/4'
                        />
                        <label htmlFor="my-drawer-4" className='drawer-button absolute right-1 sm:right-3 top-1 sm:top-3'>
                            <IoCloseOutline className='text-3xl sm:text-4xl text-[#003E82]' />
                        </label>
                    </div>

                    <Link href="/">
                        <li 
                            className={`h-10 py-2 ps-2 text-sm font-semibold
                              ${pathName === "/" 
                                ? "bg-[#F9F9FF] text-[#003E82] border-[#003E82] border-b-2" 
                                : "bg-white text-[#727783] hover:text-[#424752] hover:bg-[#D9D9E1]"
                              }`}
                              onClick={handleCloseDrawer}
                        >
                            HOME
                        </li>
                    </Link>
                    <Link href="/score-evaluation">
                        <li 
                            className={`h-10 ps-2 py-2 text-sm font-semibold 
                              ${pathName === "/score-evaluation" 
                                ? "bg-[#F9F9FF] text-[#003E82] border-[#003E82] border-b-2" 
                                : "bg-white text-[#727783] hover:text-[#424752] hover:bg-[#D9D9E1]"
                              }`}
                              onClick={handleCloseDrawer}
                        >
                            SCORE EVALUATION
                        </li>
                    </Link>
                    <Link href="/about-us">
                        <li 
                            className={`h-10 ps-2 py-2 text-sm font-semibold 
                              ${pathName === "/about-us" 
                                ? "bg-[#F9F9FF] text-[#003E82] border-[#003E82] border-b-2" 
                                : "bg-white text-[#727783] hover:text-[#424752] hover:bg-[#D9D9E1]"
                              }`}
                              onClick={handleCloseDrawer}
                        >
                            ABOUT US
                        </li>
                    </Link>
                    <Link href="/contact-us">
                        <li    
                            className={`h-10 ps-2 py-2 text-sm font-semibold
                              ${pathName === "/contact-us" 
                                ? "bg-[#F9F9FF] text-[#003E82] border-[#003E82] border-b-2" 
                                : "bg-white text-[#727783] hover:text-[#424752] hover:bg-[#D9D9E1]"
                              }`}
                              onClick={handleCloseDrawer}
                        >
                            CONTACT US
                        </li>
                    </Link> 

                    <div className='w-full mt-16'>
                        <div className='w-full flex flex-col gap-2'>
                            <p className='flex items-center gap-2 font-medium text-xs sm:text-sm'><MdPhone className='text-xl text-[#424752]'/> <span className='text-[#191C21]'>+91 7736634226</span></p>
                            <p className='flex items-center gap-2 font-medium text-xs sm:text-sm'><MdMail className='text-xl text-[#424752]'/> <span className='text-[#191C21]'>info@caabscore.com</span></p>
                        </div>
                        <div className='mt-4 flex justify-start items-center gap-4'>
                            <Link href="" >
                                <span>
                                    <img className='size-6' src="/facebook-icon-navbar.svg" alt="Facebook Icon" />
                                    {/* <BiLogoFacebookSquare className='text-3xl' /> */}
                                </span>
                            </Link>
                            <Link href="">
                                <span>
                                    <img className='size-6' src="/instagram-icon-navbar.svg" alt="Instagram Icon" />
                                    {/* <BiLogoInstagram className='text-3xl' /> */}
                                </span>
                            </Link>
                                
                            <Link href="">
                                <span>
                                    <img className='size-6' src="/linkedin-icon-navbar.svg" alt="LinkedIn Icon" />
                                    {/* <BiLogoLinkedinSquare className='text-3xl' /> */}
                                </span>
                            </Link>
                            <Link href="">
                                <span>
                                    <img className='size-6' src="/twitter-icon-navbar.svg" alt="X Icon" />
                                    {/* <BsTwitterX className='text-2xl' /> */}
                                </span>
                            </Link>
                        </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            



            {/* this div is only displayed for width above 768px (md:)  */}
            <div className='hidden md:w-4/5 xl:w-3/5 h-full md:flex flex-col'>

                <div className='w-full h-2/5 flex'>

                    <div className='sm:w-4/6 lg:ps-20 flex justify-start items-center gap-5'>
                        <p className='flex items-center gap-2 font-medium text-xs sm:text-sm'><MdPhone className='text-xl text-[#424752]'/> <span className='text-[#191C21]'>+91 7736634226</span></p>
                        <p className='flex items-center gap-2 font-medium text-xs sm:text-sm'><MdMail className='text-xl text-[#424752]'/> <span className='text-[#191C21]'>info@caabscore.com</span></p>
                    </div>
                    <ul className='mt-2 sm:m-0 sm:w-2/6 flex justify-end gap-4 lg:gap-8 items-center'>
                        <Link 
                            href=""
                            title='Facebook'
                            onMouseOver={() => {setIsFacebookHovered(true)}}
                            onMouseOut={() => {setIsFacebookHovered(false)}}
                        >
                            <li>
                                {
                                    isFacebookHovered ? 
                                    <img className='size-6' src="/facebook-icon-hover.svg" alt="Facebook Hover" />
                                    :
                                    <img className='size-6' src="/facebook-icon-navbar.svg" alt="Facebook Icon" />
                                }
                                {/* <BiLogoFacebookSquare className='text-xl sm:text-3xl' /> */}
                            </li>
                        </Link>
                        <Link 
                            href=""
                            title='Instagram'
                            onMouseOver={() => {setIsInstagramHovered(true)}}
                            onMouseOut={() => {setIsInstagramHovered(false)}}
                        >
                            <li>
                                {
                                    isInstagramHovered ? 
                                    <img className='size-6' src="/instagram-icon-hover.svg" alt="Instagram Hover" />
                                    :
                                    <img className='size-6' src="/instagram-icon-navbar.svg" alt="Instagram Icon" />
                                }
                                {/* <BiLogoInstagram className='text-xl sm:text-3xl' /> */}
                            </li>
                        </Link>
                        <Link 
                            href=""
                            title='LinkedIn'
                            onMouseOver={() => {setIsLinkedInHovered(true)}}
                            onMouseOut={() => {setIsLinkedInHovered(false)}}
                        >
                            <li>
                                {
                                    isLinkedInHovered ? 
                                    <img className='size-6' src="/linkedin-icon-hover.svg" alt="LinkedIn Hover" />
                                    :
                                    <img className='size-6' src="/linkedin-icon-navbar.svg" alt="LinkedIn Icon" />
                                }
                                {/* <BiLogoLinkedinSquare className='text-xl sm:text-3xl' /> */}
                            </li>
                        </Link>
                        <Link 
                            href=""
                            title='X'
                            onMouseOver={() => {setIsTwitterHovered(true)}}
                            onMouseOut={() => {setIsTwitterHovered(false)}}
                        >
                            <li>
                                {
                                    isTwitterHovered ? 
                                    <img className='size-6' src="/twitter-icon-hover.svg" alt="X Hover" />
                                    :
                                    <img className='size-6' src="/twitter-icon-navbar.svg" alt="X Icon" />
                                }
                                {/* <BsTwitterX className='text-lg sm:text-2xl' /> */}
                            </li>
                        </Link>
                    </ul>
                </div>

                <div className='w-full h-3/5 mb-5 flex items-end'>
                    <nav className='w-full flex justify-end items-center'>
                        <div className='w-3/4 lg:w-4/5 lg:ps-20'>
                            <ul className='flex items-center justify-start'>
                                <Link href="/">
                                    <li 
                                        className={`h-8 px-4 py-2 text-xs lg:text-sm flex font-semibold justify-center items-center 
                                          ${pathName === "/" 
                                            ? "bg-[#F9F9FF] text-[#003E82] border-[#003E82] border-b-2" 
                                            : "bg-white text-[#727783] hover:text-[#424752] hover:bg-[#D9D9E1]"
                                          }`}
                                    >
                                        HOME
                                    </li>
                                </Link>
                                <Link href="/score-evaluation">
                                    <li 
                                        className={`h-8 px-4 py-2 text-xs lg:text-sm flex font-semibold justify-center items-center 
                                          ${pathName === "/score-evaluation" 
                                            ? "bg-[#F9F9FF] text-[#003E82] border-[#003E82] border-b-2" 
                                            : "bg-white text-[#727783] hover:text-[#424752] hover:bg-[#D9D9E1]"
                                          }`}
                                    >
                                        SCORE EVALUATION
                                    </li>
                                </Link>
                                <Link href="/about-us">
                                    <li 
                                        className={`h-8 px-4 py-2 text-xs lg:text-sm flex font-semibold justify-center items-center 
                                          ${pathName === "/about-us" 
                                            ? "bg-[#F9F9FF] text-[#003E82] border-[#003E82] border-b-2" 
                                            : "bg-white text-[#727783] hover:text-[#424752] hover:bg-[#D9D9E1]"
                                          }`}
                                    >
                                        ABOUT US
                                    </li>
                                </Link>
                                <Link href="/contact-us">
                                    <li    
                                        className={`h-8 px-4 py-2 text-xs lg:text-sm flex font-semibold justify-center items-center 
                                          ${pathName === "/contact-us" 
                                            ? "bg-[#F9F9FF] text-[#003E82] border-[#003E82] border-b-2" 
                                            : "bg-white text-[#727783] hover:text-[#424752] hover:bg-[#D9D9E1]"
                                          }`}
                                    >
                                        CONTACT US
                                    </li>
                                </Link>   
                            </ul>
                        </div>
                        <div className='w-1/4 lg:w-1/5 flex items-center justify-end'>
                            <button className='h-8 lg:h-10 px-4 lg:py-2 bg-[#74CE3A] text-white text-sm lg:text-base font-semibold rounded-2xl'>Login / SignUp</button>
                        </div>
                        
                    </nav>
                </div>

            </div>



        </div>
    </nav>
  )
}

export default Navbar