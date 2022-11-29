import React, { useEffect } from 'react'
import { club_events } from '../../../data/events'
import Image from 'next/image'
import { ViewAllButton } from '../../helpers/button/viewall'
import Link from 'next/link'
// Certificates.sort((a, b) => (a.id < b.id) ? 1 : -1)
const ClubPerformance = () => {
    useEffect(() => {
        if (window.screen.availWidth > 1280)
            document.getElementById('scrollCertificate').scrollLeft += 500
    }, [])

    return (

        <div className='flex flex-col justify-center align-middle w-full py-20'>
            <div className='text-white text-3xl md:text-4xl lg:text-5xl font-semibold mx-auto text-center'>
                <h1>Clubs Performance</h1>
            </div>
            <div id='scrollCertificate' className="relative w-screen flex gap-x-6 snap-x overflow-x-auto overflow-y-hidden  snap-mandatory no-scrollbar mt-[2vh] pb-5 pt-5  ">
                <div className="  sm:snap-center shrink-0  w-1/5 sm:w-[calc(15%)] md:w-[calc(20%)] lg:w-[calc(25%)] xl:w-[calc(31%)] "></div>

                {club_events.map((e) => (
                    <div className="snap-center shrink-0 min-w-[calc(24rem)] w-[calc(60vw)] max-w-lg  rounded-lg " key={e.id}>
                        <div className="mb-6 lg:mb-0 max-w-xs text-gray-800 text-center mx-auto ">
                            <div className="bg-white  block rounded-lg shadow-lg">
                                {/* <div className="bg-gradient-to-b from-[#FB5132] to-[#EA3F50]  block rounded-lg shadow-lg"> */}
                                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                                    <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" className="w-full rounded-t-lg" />
                                    <a href="#!">
                                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                                    </a>
                                    <svg className=" absolute left-0 -bottom-[1px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                        <path fill="#fff"
                                            // <path fill="url(#svg-gradient-t-m)"
                                            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="p-6">
                                    <h5 className="text-lg font-bold mb-4" >{e.title}</h5>
                                    <p className="text-gray-500 mb-4">{e.subtitle}</p>
                                    <ul className="list-inside flex mx-auto justify-center">
                                        <a href="#!" className="px-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 text-blue-600">
                                                <path fill="currentColor"
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                            </svg>
                                        </a>
                                        <a href="#!" className="px-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                                                <path fill="currentColor"
                                                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                            </svg>
                                        </a>
                                        <a href="#!" className="px-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                                                <path fill="currentColor"
                                                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                            </svg>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}


                <div className="  sm:snap-center shrink-0  w-1/5 sm:w-[calc(15%)] md:w-[calc(20%)] lg:w-[calc(25%)] xl:w-[calc(31%)]"></div>

            </div>
            <Link href="/certificates" passHref>
                <div className="mt-0 self-center">
                    <ViewAllButton />
                </div>
            </Link>
        </div>

    )
}

export default ClubPerformance

