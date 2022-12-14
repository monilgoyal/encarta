
import Footer from '../components/footer'
import Header from '../components/header'
import EventScrollar from '../components/helpers/Event_Scrollar'
import Navbar from '../components/navbar'
import { useSelector } from 'react-redux'
import { RootState } from '../state/reducers'
import { EventInitialState } from '../state/reducers/eventDataReducer'
// Certificates.sort((a, b) => (a.id < b.id) ? 1 : -1)

function Certificate() {
    const events = useSelector((state: RootState) => state.EventData)

    return (
        <>
            <Header title="Encarta - Events" header_content="Events in Encarta" />
            <Navbar />
            {
                JSON.stringify(EventInitialState) != JSON.stringify(events) && <>
                    {events.Events.TECH &&

                        <section id="tech-event" className=" pt-20 lg:pt-24 ">
                            <div className='text-white text-3xl md:text-4xl lg:text-5xl font-[Backsteal-Regular] mx-auto text-center md:mb-12'>
                                <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#FB5131] via-[#E93E53] to-[#E02170]' >TECH EVENTS</h1>
                            </div>
                            <EventScrollar type={'tech'} event_catag={Object.values(events.Events.TECH)} />
                        </section>
                    }
                    {events.Events.NON_TECH &&
                        <section id="non-tech-event" className=" pt-20 lg:pt-24 ">
                            <div className='text-white text-3xl md:text-4xl lg:text-5xl font-[Backsteal-Regular] mx-auto text-center md:mb-12'>
                                <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#FB5131] via-[#E93E53] to-[#E02170]' >NON TECH EVENTS</h1>
                            </div>
                            <EventScrollar type='non_tech' event_catag={Object.values(events.Events.NON_TECH)} />
                        </section>
                    }
                    {events.Events.WORKSHOP &&
                        <section id="workshop-event" className=" pt-20 lg:pt-24 ">
                            <div className='text-white text-3xl md:text-4xl lg:text-5xl font-[Backsteal-Regular] mx-auto text-center md:mb-12'>
                                <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#FB5131] via-[#E93E53] to-[#E02170]' >WorkShops</h1>
                            </div>
                            <EventScrollar type='ws' event_catag={Object.values(events.Events.WORKSHOP)} />
                        </section>
                    }
                    {events.Events.SPEAKERS &&

                        <section id="speaker-event" className=" pt-20 lg:pt-24 ">
                            <div className='text-white text-3xl md:text-4xl lg:text-5xl font-[Backsteal-Regular] mx-auto text-center md:mb-12'>
                                <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#FB5131] via-[#E93E53] to-[#E02170]' >Speaker Sessions</h1>
                            </div>
                            <EventScrollar type={'speaker'} event_catag={Object.values(events.Events.SPEAKERS)} />
                        </section>
                    }{events.Events.ENTREPRENEURSHIP &&

                        <section id="entrepreneurship-event" className=" pt-20 lg:pt-24 ">
                            <div className='text-white text-3xl md:text-4xl lg:text-5xl font-[Backsteal-Regular] mx-auto text-center md:mb-12'>
                                <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#FB5131] via-[#E93E53] to-[#E02170]' >Entrepreneurship</h1>
                            </div>
                            <EventScrollar type='entrepreneurship' event_catag={Object.values(events.Events.ENTREPRENEURSHIP)} />
                        </section>
                    }
                </>
            }
            <div className="pt-20 lg:pt-24"></div>
            <Footer />
        </>
    )
}

export default Certificate