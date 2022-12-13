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
                    <div className="lg:w-1/3 flex lg:flex-nowrap flex-wrap  justify-center items-end lg:justify-start ">
                        <div className="relative sm:w-64 w-80  text-center lg:text-left lg:mt-0 mt-6">
                            <div className="flex-row lg:flex ">
                                <div className='flex justify-center items-center '>

                                    <Link href='/' passHref>
                                        <div className="block   items-center mb-4 lg:mb-0 w-16 h-16 ">
                                            <Image src='https://cdn.dorik.com/6170fc2c54b34900117ea7a5/632a2aa24a33d3001191b969/images/IMG_0251_517ifwou.png' width={20} height={20} className="rounded-full" alt="mbm university" layout='responsive'></Image>
                                        </div>
                                    </Link>
                                </div>
                                <div className="flex-row lg:ml-4 items-center lg:mt-1 ">
                                    <a href="https://mbm.ac.in/" className='mx-auto  tracking-widest w-full whitespace-nowrap '>
                                        DEPARTMENT OF<br /> COMPUTER SCIENCE ENGINEERING
                                    </a>
                                    <a href="https://mbm.ac.in/" className='mx-auto  tracking-widest'>
                                        <br />MBM UNIVERSITY,JODHPUR
                                    </a><br />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' lg:w-1/3  mt-2 lg:mt-0 z-50 text-center flex flex-col '>
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
                    <div className=' lg:w-1/3  mt-2 lg:mt-0 z-50 text-center lg:text-left flex flex-col '>
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
                </div>
            </div>
            <div className="bg-black bg-opacity-40 hidden lg:flex">
                <div className=" mx-auto text-center px-5 ">
                    <Social extraClass='mt-2' fill="#fff" />
                </div>
            </div>
        </footer >
    )
}

export default Footer