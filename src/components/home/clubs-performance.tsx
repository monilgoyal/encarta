import React, { useEffect } from 'react'
import { club_events } from '../../data/events'
import Image from 'next/image'
import { ViewAllButton } from '../helpers/button/viewall'
import Link from 'next/link'
// Certificates.sort((a, b) => (a.id < b.id) ? 1 : -1)
const ClubPerformance = () => {
    useEffect(() => {
        if (window.screen.availWidth > 1280)
            document.getElementById('scrollCertificate').scrollLeft += 500
    }, [])

    return (

        <div className='flex flex-col justify-center align-middle w-full py-16 lg:py-20'>
            <div className='text-white text-2xl md:text-3xl lg:text-4xl font-semibold mx-auto text-center'>
                <h1 className='tracking-[.1em] mr-[-0.1em]  font-[Backsteal-Regular] text-transparent bg-clip-text bg-gradient-to-b from-[#FB5131] via-[#E93E53] to-[#E02170]'>Clubs Performance</h1>
            </div>
            <div id='scrollCertificate' className="relative w-screen flex gap-x-6 snap-x overflow-x-auto overflow-y-hidden  snap-mandatory no-scrollbar  mt-[12vh] ">
                <div className="  sm:snap-center shrink-0  w-1/5 sm:w-[calc(15%)] md:w-[calc(20%)] lg:w-[calc(25%)] xl:w-[calc(31%)] "></div>

                {club_events.map((e) => (
                    <div className="snap-center shrink-0 min-w-[calc(24rem)] w-[calc(60vw)] max-w-lg  rounded-lg " key={e.id}>
                        <div className=" lg:mb-0 max-w-xs text-gray-800 text-center mx-auto ">
                            <div className="bg-white  block rounded-lg shadow-lg">
                                {/* <div className="bg-gradient-to-b from-[#FB5132] to-[#EA3F50]  block rounded-lg shadow-lg"> */}
                                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                                    <Image className=' w-full rounded-t-lg  ' src={"https://images.weserv.nl/?url=" + e.thumbUrl + "&w=600&h=400&dpr=2"} width={600} height={500} objectFit="cover" layout='responsive' alt={e.title}></Image>

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
                                    <h5 className="text-lg font-bold mb-2" >{e.title}</h5>
                                    <p className="text-gray-500 mb-4">{e.subtitle}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}


                <div className="  sm:snap-center shrink-0  w-1/5 sm:w-[calc(15%)] md:w-[calc(20%)] lg:w-[calc(25%)] xl:w-[calc(31%)]"></div>

            </div>
        </div>

    )
}

export default ClubPerformance

