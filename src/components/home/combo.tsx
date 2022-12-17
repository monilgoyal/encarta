import React, { useEffect } from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '../../state/reducers'
import { EventInitialState } from '../../state/reducers/eventDataReducer'
import Link from 'next/link'
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
                <h1 className='tracking-[.1em] mr-[-0.1em]  font-[Backsteal-Regular] text-transparent bg-clip-text bg-gradient-to-r from-[#FB5131] via-[#E93E53] to-[#E02170]'>COMBOS</h1>
            </div>
            {JSON.stringify(EventInitialState) == JSON.stringify(events) && <div className='text-white absolute top-[40%] md:top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xl font-bold animate-pulse'>Loading...</div>}

            <div id='scrollCertificate' className="relative w-screen flex gap-x-6 snap-x overflow-x-auto overflow-y-hidden  snap-mandatory no-scrollbar  mt-[12vh] ">
                <div className="  sm:snap-center shrink-0  w-1/5 sm:w-[calc(15%)] md:w-[calc(20%)] lg:w-[calc(25%)] xl:w-[calc(31%)] "></div>

                {JSON.stringify(EventInitialState) != JSON.stringify(events) && events.Events.COMBOS && Object.values(events.Events.COMBOS).map((e: any, index) => (
                    <div className="snap-center shrink-0  max-w-lg w-3/4 sm:w-2/5 lg:w-3/5  rounded-lg cursor-pointer " key={e.id}>
                        <Link href={`/combos/${e.id}`} passHref >
                            <a>
                                <div className=" lg:mb-0 max-w-[320px]  text-center mx-auto w-full ">
                                    <div className="block rounded-lg shadow-lg backdrop-blur-sm bg-black/60">
                                        <div className="relative overflow-hidden bg-no-repeat bg-cover">
                                            <Image className=' w-full rounded-lg  ' src={e.thumbUrl} width={135} height={135} objectFit="contain" layout='responsive' alt={e.title}></Image>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                ))}


                <div className="  sm:snap-center shrink-0  w-1/5 sm:w-[calc(15%)] md:w-[calc(20%)] lg:w-[calc(25%)] xl:w-[calc(31%)]"></div>

            </div>
        </div>

    )
}

export default ClubPerformance

