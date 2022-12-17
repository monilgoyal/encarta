import Link from 'next/link'
import React from 'react'
import { ViewAllButton } from '../helpers/button/viewall'
import { useSelector } from 'react-redux'
import { RootState } from '../../state/reducers'
import { EventInitialState } from '../../state/reducers/eventDataReducer'
import EventCard from '../helpers/Cards/event'

const NonTechnicalEvents = () => {
    const events = useSelector((state: RootState) => state.EventData)

    return (
        <div className=' flex flex-col justify-center align-middle w-full py-16 lg:py-20'>
            <div className='text-white  text-2xl md:text-3xl lg:text-4xl font-semibold mx-auto text-center'>
                <h1 className='tracking-[.1em] mr-[-0.1em]  font-[Backsteal-Regular] text-transparent bg-clip-text bg-gradient-to-r from-[#FB5131] via-[#E93E53] to-[#E02170] '>Non Tech Events</h1>
            </div>
            {JSON.stringify(EventInitialState) == JSON.stringify(events) && <div className='text-white absolute top-[40%] md:top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xl font-bold animate-pulse'>Loading...</div>}

            <div className='relative w-full flex gap-x-6 lg:gap-x-12 snap-x overflow-x-auto  snap-mandatory no-scrollbar mt-[5vh] '>
                <div className="snap-center shrink-0 w-[calc(4%)] md:w-1/12 lg:w-1/6"></div>
                {JSON.stringify(EventInitialState) != JSON.stringify(events) && events.Events.NON_TECH && Object.values(events.Events.NON_TECH).map((e: any) => (
                    <EventCard type={'non_tech'} e={e} key={e.id} />
                ))}
                <div className="snap-center shrink-0 w-[calc(4%)] md:w-1/12 lg:w-1/6"></div>

            </div>
            {
                process.env.NEXT_PUBLIC_TECH_PAY_BUTTON &&
                <Link href="/events/#non-tech-event" passHref>
                    <div className="md:mt-[10vh] self-center absolute top-[75vh]">
                        <ViewAllButton id={process.env.NEXT_PUBLIC_NON_TECH_PAY_BUTTON} />
                    </div>
                </Link>}
        </div>

    )
}

export default NonTechnicalEvents