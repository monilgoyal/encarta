import Link from 'next/link';
import React from 'react'
import Social from '../helpers/social';
import Image from 'next/image'
// import { BiMap } from 'react-icons/bi';
import { FiMail, FiMapPin } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs';

function Footer() {
    return (
        <footer className="text-white dark:text-gray-400 bg-transparent body-font ">
            <div className="border-t ">
                <div className="sm:px-16 lg:px-20 lg:pt-4 pb-4  flex flex-col lg:flex-row mx-auto items-center justify-center text-sm">
                    <div className="lg:w-1/4 flex lg:flex-nowrap flex-wrap  justify-center items-end lg:justify-start ">
                        <div className="relative sm:w-64 w-80  text-center lg:text-left lg:mt-0 mt-6">
                            <div className="flex-row lg:flex ">
                                <div className='flex justify-center items-center '>

                                    <Link href='/' passHref>
                                        <div className="block   items-center mb-4 lg:mb-0 w-16 h-16 ">
                                            <Image src='/mbm.png' width={20} height={20} className="rounded-full cursor-pointer" alt="logo" layout='responsive'></Image>
                                        </div>
                                    </Link>
                                </div>
                                <div className="flex-row lg:ml-4 items-center lg:mt-1 ">
                                    <span className='cursor-pointer'>
                                        <a href="https://mbm.ac.in/">
                                            DEPARTMENT OF COMPUTER SCIENCE ENGINEERING MBM UNIVERSITY,JODHPUR
                                        </a>
                                    </span>
                                    {/* <span>
                                    <a href="https://mbm.ac.in/" className='mx-auto  tracking-widest w-full whitespace-nowrap '>
                                       <p>DEPARTMENT OF <br />  COMPUTER SCIENCE <br /> ENGINEERING <br /> MBM UNIVERSITY,JODHPUR</p> 
                                    </a>
                                    </span> */}
                                    {/* <a href="https://mbm.ac.in/" className='mx-auto  tracking-widest'>
                                        MBM UNIVERSITY,JODHPUR
                                    </a> */}

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' lg:w-1/4  mt-2 lg:mt-0 z-50 text-center flex flex-col '>
                        <Link href='/privacy_policy' passHref>
                            <span className='cursor-pointer self-center'>Privacy Policy</span>
                        </Link>
                        <Link href='/terms_and_condition' passHref>
                            <span className='cursor-pointer self-center'>Terms and Conditions</span>
                        </Link>
                        <Link href='/cancellation_policy' passHref>
                            <span className='cursor-pointer self-center'>Cancellation & Refund Policy</span>
                        </Link>
                        <Link href='/shipping_and_delivery' passHref>
                            <span className='cursor-pointer self-center'>Shipping and Delivery</span>
                        </Link>
                    </div>
                    <div className=' lg:w-1/4  mt-2 lg:mt-0 z-50 text-center lg:text-left flex flex-col '>
                        <div className="self-end flex-col flex">

                            <span className='cursor-pointer '>
                                <a href="tel:+918947910187">
                                    <BsTelephone className='inline mr-1' />+918000874283

                                </a>
                            </span>
                            <span className='cursor-pointer '>
                                <a href="mailto:contact@encarta.tech">
                                    <FiMail className='inline mr-1' />contact@encarta.tech
                                </a>
                            </span>
                            <span className='cursor-pointer  '>
                                <a href="https://goo.gl/maps/8uvtXHuVWZC2FgTe9">
                                    <FiMapPin className='inline mr-1 ' />MBM University, CSE Department, Residency <br /> Road, Ratanada, Jodhpur – 342011
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="lg:w-1/4  bg-black bg-opacity-40 hidden lg:flex">
                        <div className=" mx-auto text-center px-5 ">
                            <Social extraClass='mt-2' fill="#fff" />
                        </div>
                    </div>
                </div>
            </div>
            
        </footer >
    )
}

export default Footer