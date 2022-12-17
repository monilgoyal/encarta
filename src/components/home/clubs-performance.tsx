import React, { useEffect } from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '../../state/reducers'
import { EventInitialState } from '../../state/reducers/eventDataReducer'
// Certificates.sort((a, b) => (a.id < b.id) ? 1 : -1)
const ClubPerformance = () => {
    const events = useSelector((state: RootState) => state.EventData)
    useEffect(() => {
        if (window.screen.availWidth > 1280)
            document.getElementById('scrollCertificate').scrollLeft += 500
    }, [])

    return (

        <div className='flex flex-col justify-center align-middle w-full py-16 lg:py-20'>
            <div className='text-white text-2xl md:text-3xl lg:text-4xl font-semibold mx-auto text-center'>
                <h1 className='tracking-[.1em] mr-[-0.1em]  font-[Backsteal-Regular] text-transparent bg-clip-text bg-gradient-to-r from-[#FB5131] via-[#E93E53] to-[#E02170]'>ICC Events</h1>
            </div>
            {JSON.stringify(EventInitialState) == JSON.stringify(events) && <div className='text-white absolute top-[40%] md:top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xl font-bold animate-pulse'>Loading...</div>}
            <div id='scrollCertificate' className="relative w-screen flex gap-x-6 snap-x overflow-x-auto overflow-y-hidden  snap-mandatory no-scrollbar  mt-[12vh] ">
                <div className="  sm:snap-center shrink-0  w-1/5 sm:w-[calc(15%)] md:w-[calc(20%)] lg:w-[calc(25%)] xl:w-[calc(31%)] "></div>

                {JSON.stringify(EventInitialState) != JSON.stringify(events) && events.Events.CLUB && Object.values(events.Events.CLUB).map((e: any, index) => (
                    <div className="snap-center shrink-0  max-w-lg w-3/4 sm:w-2/5 lg:w-3/5  rounded-lg  " key={e.id}>
                        <div className=" lg:mb-0 max-w-[320px]  text-center mx-auto w-full ">
                            <div className={"block rounded-lg shadow-lg".concat(' ', index % 2 == 0 ? 'bg-white' : 'bg-black')}>
                                {/* <div className="bg-gradient-to-b from-[#FB5132] to-[#EA3F50]  block rounded-lg shadow-lg"> */}
                                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                                    <Image className=' w-full rounded-t-lg  ' src={"https://images.weserv.nl/?url=" + e.thumbUrl + "&w=600&h=400&dpr=2"} width={600} height={500} objectFit="cover" layout='responsive' alt={e.title}></Image>

                                    <a href="#!">
                                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                                    </a>
                                    <svg className=" absolute left-0 -bottom-[1px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                        <path fill={index % 2 == 0 ? '#fff' : '#000'}
                                            // <path fill="url(#svg-gradient-t-m)"
                                            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="p-6">
                                    <h5 className={index % 2 == 0 ? 'text-black' : 'text-white'} >{e.title}</h5>
                                    <p className={index % 2 == 0 ? 'text-gray-500' : 'text-gray-300'}>{e.subtitle}</p>
                                    {
                                        e.date != "" && e.time != "" &&
                                        <p className={index % 2 == 0 ? 'text-gray-500' : 'text-gray-300'}>{e.date}, {e.time}</p>
                                    }

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

