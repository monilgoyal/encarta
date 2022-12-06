import Link from 'next/link';
import React from 'react'
import Social from '../helpers/social';
import Image from 'next/image'

function Footer() {
    return (
        <footer className="text-white dark:text-gray-400 bg-transparent body-font ">
            <div className="border-t ">
                <div className="container lg:px-32 pt-2 pb-4 md:pt-4 flex flex-col md:flex-row mx-auto items-center justify-center text-sm">
                    <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start ">
                        <div className="relative sm:w-64 w-80 text-center md:text-left md:mt-0 mt-6">
                            <div className="flex-row  md:flex ">
                                <div className='flex justify-center items-center '>

                                    <Link href='/' passHref>
                                        <div className="block title-font  items-center mb-4 md:mb-0 w-20 h-20 ">
                                            <Image src='/mbm.png' width={20} height={20} className="rounded-full" alt="logo" layout='responsive'></Image>
                                        </div>
                                    </Link>
                                </div>
                                <div className="flex-row md:ml-4 items-center md:mt-1">
                                    <a href="https://mbm.ac.in/" className='mx-auto  tracking-widest w-full whitespace-nowrap'>
                                        DEPARTMENT OF <br />COMPUTER SCIENCE ENGINEERING
                                    </a>
                                    <a href="https://mbm.ac.in/" className='mx-auto  tracking-widest'>
                                        <br />MBM UNIVERSITY, JODHPUR RAJASTHAN 342011
                                    </a><br />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' md:ml-auto  mt-6 md:mt-0 z-50 text-center md:text-left '>
                        <Link href='/privacy_policy' passHref>
                            <div className='cursor-pointer'>Privacy Policy</div>
                        </Link>
                        <Link href='/terms_and_condition' passHref>
                            <div className='cursor-pointer'>Terms and Conditions</div>
                        </Link>
                        <Link href='/cancellation_policy' passHref>
                            <div className='cursor-pointer'>Cancellation & Refund Policy</div>
                        </Link>
                        <Link href='/shipping_and_delivery' passHref>
                            <div className='cursor-pointer'>Shipping and Delivery</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-black bg-opacity-40 ">
                <div className=" mx-auto text-center px-5 ">
                    <Social extraClass='mt-2' fill="#fff" />
                </div>
            </div>
        </footer >
    )
}

export default Footer