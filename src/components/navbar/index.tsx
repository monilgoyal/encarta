import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GoHome } from 'react-icons/go';
import { SiHandshake } from 'react-icons/si';

// import { SiAboutdotme } from 'react-icons/si';
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/reducers';
import DrawerToggler from '../helpers/button/drawerToggler';
import { bindActionCreators } from 'redux';
import { actionCreator } from '../../state';
import Social from '../helpers/social';
import { BsCalendarEvent } from 'react-icons/bs';
import { MdSchedule } from 'react-icons/md';
import { FaInfo } from 'react-icons/fa';

function Navbar() {
    const router = useRouter();
    const dispatch = useDispatch()
    const IsDrawerOpen = useSelector((state: RootState) => state.IsDrawerOpen)
    const toggleDrawer = bindActionCreators(actionCreator.drawerToggle, dispatch)

    // const toggleContactForm = bindActionCreators(actionCreator.contactFormToggle, dispatch)
    const routeLinkStyle = "font-medium hover:text-[#fff] hover:opacity-100 text-xl hover:scale-110"
    return (
        <div className="relative bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1 ">
                        <Link href='/' passHref>
                            <div className="block title-font font-medium items-center mb-4 md:mb-0 w-16 h-12 hover:scale-125 delay-150 duration-300">
                                <Image src='https://cdn.dorik.com/6170fc2c54b34900117ea7a5/632a2aa24a33d3001191b969/images/logo_qhk837zx.png' width={20} height={20} className="rounded-full" alt="logo" layout='responsive'></Image>
                            </div>
                        </Link>
                    </div>

                    <div className="-mr-2 -my-2 md:hidden">
                        <DrawerToggler />
                    </div>
                    <nav className="hidden md:flex space-x-7  ">
                        <Link href="/" passHref><a className={routeLinkStyle.concat(" ", router.pathname == "/" ? "text-[#FB5131] hover:text-[#FB5131]" : "text-gray-200   opacity-80")}>HOME</a></Link>
                        <Link href="/events" passHref><a className={routeLinkStyle.concat(" ", router.pathname == "/events" ? "text-[#FB5131] hover:text-[#FB5131]" : "text-gray-200 opacity-80")}>EVENTS</a></Link>
                        <Link href="/sponsor" passHref><a className={routeLinkStyle.concat(" ", router.pathname == "/sponsor" ? "text-[#FB5131]" : "text-gray-200 opacity-80")}>SPONSORS</a></Link>
                        <Link href="/schedule" passHref><a className={routeLinkStyle.concat(" ", router.pathname == "/schedule" ? "text-[#FB5131] hover:text-[#FB5131]" : "text-gray-200 opacity-80")}>SCHEDULE</a></Link>
                        <Link href="/about" passHref><a className={routeLinkStyle.concat(" ", router.pathname == "/about" ? "text-[#FB5131]" : "text-gray-200 opacity-80")}>ABOUT</a></Link>
                    </nav>
                </div>
            </div>
            {/* Mobile menu */}
            <div className={" fixed top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden bg-transparent z-50".concat(" ", IsDrawerOpen ? "-translate-y-0 " : "-translate-y-full ")}>
                <div className="rounded-lg shadow-lg ring-1  ring-black ring-opacity-50  bg-black  divide-y-2 divide-gray-500 text-white">
                    <div className="pt-5 pb-6 px-5">
                        <div className="flex items-center justify-between">
                            <div className='w-14 h-14'>
                                <Image src='/logo.png' width={48} height={48} alt="logo" layout='responsive'></Image>
                            </div>
                            <div className="-mr-2  rounded-lg" >
                                <DrawerToggler />
                            </div>

                        </div>
                        <div className="mt-6">
                            <nav className="grid gap-y-8 ">
                                <Link href="/" passHref>
                                    <a onClick={toggleDrawer} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-800">
                                        <GoHome className='text-2xl' fill='url(#svg-gradient)' />

                                        <span className="ml-6 text-base font-medium " >Home </span>
                                    </a>
                                </Link>

                                <Link href="/events" passHref>
                                    <a onClick={toggleDrawer} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-800">
                                        <BsCalendarEvent className='text-2xl  ' fill='url(#svg-gradient)' />
                                        <span className="ml-6 text-base font-medium "> Events </span>
                                    </a>
                                </Link>


                                <Link href="/sponsor" passHref>
                                    <a onClick={toggleDrawer} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-800">
                                        <SiHandshake className='text-2xl' fill='url(#svg-gradient)' />
                                        <span className="ml-6 text-base font-medium "> Sponsors </span>
                                    </a>
                                </Link>
                                <Link href="/schedule" passHref>
                                    <a onClick={toggleDrawer} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-800">
                                        <MdSchedule className='text-2xl' fill='url(#svg-gradient)' />
                                        <span className="ml-6 text-base font-medium "> Schedule </span>
                                    </a>
                                </Link>
                                <Link href="/about" passHref>
                                    <a onClick={toggleDrawer} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-800">
                                        <FaInfo className='text-xl' fill='url(#svg-gradient)' />
                                        <span className="ml-6 text-base font-medium "> About </span>
                                    </a>
                                </Link>
                            </nav>
                        </div>
                    </div>
                    <div className="  py-6 px-5 space-y-6">
                        <Social extraClass='' fill='url(#svg-gradient)' />
                        {/* <div>
                            <span style={{ backgroundImage: 'linear-gradient(to right bottom, #fb5131, #f94143, #f43253, #eb2762, #e02170)' }} className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white" onClick={toggleContactForm}> Register </span>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar