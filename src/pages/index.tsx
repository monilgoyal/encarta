import type { NextPage } from 'next'
import Footer from '../components/footer'
import Header from '../components/header'
import Hero from '../components/home/hero'
import Navbar from '../components/navbar'
import Sponsors from '../components/home/sponsors'
import TechnicalEvents from '../components/home/tech-event'
import NonTechnicalEvents from '../components/home/non-tech-event'
import ClubPerformance from '../components/home/clubs-performance'
import Workshops from '../components/home/workshops'
import SpeakerSession from '../components/home/speaker-session'
import Entrepreneurshipeurship from '../components/home/entrepreneurship'
import { useSelector } from 'react-redux'
import { RootState } from '../state/reducers'
// import './index.css'
const Home: NextPage = () => {
  const events = useSelector((state: RootState) => state.EventData)
  return (
    <>
      <Header />
      <div className="main-screen snap-y overflow-y-scroll overflow-x-hidden snap-mandatory h-screen min-h-fit hide-sb temp">
        <div className='relative h-screen snap-center min-h-[calc(750px)] scroll-smooth ' >
          <Navbar />
          <Hero />
        </div>
        <div className='relative h-screen snap-center min-h-[calc(750px)]' id="events" >
          <TechnicalEvents />
        </div>
        <div className='relative h-screen snap-center min-h-[calc(750px)]' id="events" >
          <NonTechnicalEvents />
        </div>
        <div className='relative h-screen snap-center min-h-[calc(750px)]'>
          <ClubPerformance />
        </div>
        {
          events.Events.WORKSHOP &&
          <div className='relative h-screen snap-center min-h-[calc(750px)]'>
            <Workshops />
          </div>
        }
        {
          events.Events.SPEAKERS &&
          <div className='relative h-screen snap-center min-h-[calc(750px)]'>
            <SpeakerSession />
          </div>
        }
        {
          events.Events.ENTREPRENEURSHIP &&
          <div className='relative h-screen snap-center min-h-[calc(750px)]'>
            <Entrepreneurshipeurship />
          </div>
        }
        <div className='relative h-screen snap-center min-h-[calc(750px)]'>
          <Sponsors />
          {/* <div className='flex flex-col items-center  self-center align-middle justify-around h-[80vh]'>

            <h2 className='text-xl md:text-3xl md:tracking-[0.4rem] tracking-[.1rem]  text-white text-center   font-extralight  mb-5  md:mb-0 font-[Eirian] ' >Registration Starting Soon...</h2>
          </div> */}

          <div className="absolute bottom-0 w-full">
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
