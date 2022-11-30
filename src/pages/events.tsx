
import Footer from '../components/footer'
import Header from '../components/header'
import EventScrollar from '../components/helpers/Event_Scrollar'
import Navbar from '../components/navbar'
import { tech_events, non_tech_events, club_events, workshop_events, speaker_session_events, Entrepreneurship_events } from '../data/events'

// Certificates.sort((a, b) => (a.id < b.id) ? 1 : -1)

function Certificate() {

    return (
        <>
            <Header title="Encarta - Events" header_content="Certificates - Monil Goyal" />
            <Navbar />
            <section id="tech-event" className=" pt-20 lg:pt-24 ">
                <div className='text-white text-3xl md:text-4xl lg:text-5xl font-[Backsteal-Regular] mx-auto text-center md:mb-12'>
                    <h1 className='text-transparent bg-clip-text bg-gradient-to-b from-[#FB5131] via-[#E93E53] to-[#E02170]' >TECH EVENTS</h1>
                </div>
                <EventScrollar event_catag={tech_events} />
            </section>
            <section id="non-tech-event" className=" pt-20 lg:pt-24 ">
                <div className='text-white text-3xl md:text-4xl lg:text-5xl font-[Backsteal-Regular] mx-auto text-center md:mb-12'>
                    <h1 className='text-transparent bg-clip-text bg-gradient-to-b from-[#FB5131] via-[#E93E53] to-[#E02170]' >NON TECH EVENTS</h1>
                </div>
                <EventScrollar event_catag={non_tech_events} />
            </section>
            <section id="workshop-event" className=" pt-20 lg:pt-24 ">
                <div className='text-white text-3xl md:text-4xl lg:text-5xl font-[Backsteal-Regular] mx-auto text-center md:mb-12'>
                    <h1 className='text-transparent bg-clip-text bg-gradient-to-b from-[#FB5131] via-[#E93E53] to-[#E02170]' >WorkShops</h1>
                </div>
                <EventScrollar event_catag={workshop_events} />
            </section>
            <section id="speaker-event" className=" pt-20 lg:pt-24 ">
                <div className='text-white text-3xl md:text-4xl lg:text-5xl font-[Backsteal-Regular] mx-auto text-center md:mb-12'>
                    <h1 className='text-transparent bg-clip-text bg-gradient-to-b from-[#FB5131] via-[#E93E53] to-[#E02170]' >Speaker Sessions</h1>
                </div>
                <EventScrollar event_catag={speaker_session_events} />
            </section>
            <section id="entrepreneurship-event" className=" pt-20 lg:pt-24 ">
                <div className='text-white text-3xl md:text-4xl lg:text-5xl font-[Backsteal-Regular] mx-auto text-center md:mb-12'>
                    <h1 className='text-transparent bg-clip-text bg-gradient-to-b from-[#FB5131] via-[#E93E53] to-[#E02170]' >Entrepreneurship</h1>
                </div>
                <EventScrollar event_catag={Entrepreneurship_events} />
            </section>
            <div className="pt-20 lg:pt-24"></div>
            <Footer />
        </>
    )
}

export default Certificate