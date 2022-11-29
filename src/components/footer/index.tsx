import Link from 'next/link';
import React from 'react'
import Social from '../helpers/social';
import Image from 'next/image'

function Footer() {
    return (
        <footer className="text-white dark:text-gray-400 bg-transparent body-font ">
            <div className="border-t ">
                <div className="container px-32 pt-2 pb-4 md:pt-4 flex flex-wrap mx-auto items-center justify-center">
                    <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start ">
                        <div className="relative sm:w-64 w-80 text-center md:text-left md:mt-0 mt-6">
                            <div className="flex-row  md:flex ">
                                <div className='flex justify-center items-center '>

                                    <Link href='/' passHref>
                                        <div className="block title-font font-medium items-center mb-4 md:mb-0 w-16 h-16 ">
                                            <Image src='/mbm.png' width={20} height={20} className="rounded-full" alt="logo" layout='responsive'></Image>
                                        </div>
                                    </Link>
                                </div>
                                <div className="flex-row md:ml-4 items-center md:mt-1">
                                    <a href="https://mbm.ac.in/" className='mx-auto font-medium tracking-widest w-full whitespace-nowrap'>
                                        DEPARTMENT OF <br />COMPUTER SCIENCE ENGINEERING
                                    </a>
                                    <a href="https://mbm.ac.in/" className='mx-auto font-medium tracking-widest'>
                                        <br />MBM UNIVERSITY, JODHPUR
                                    </a><br />

                                </div>
                            </div>
                        </div>
                    </div>
                    <Social extraClass='mt-6 lg:mt-0 z-50 ' />
                </div>
            </div>
        </footer>
    )
}

export default Footer