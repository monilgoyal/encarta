import type { NextPage } from 'next'
import Footer from '../components/footer'
import Header from '../components/header'
import Hero from '../components/main/home/hero'
import Navbar from '../components/navbar'
import Skills from '../components/main/home/sponsors'
import TechnicalEvents from '../components/main/home/tech-event'
import NonTechnicalEvents from '../components/main/home/non-tech-event'
import ClubPerformance from '../components/main/home/clubs-performance'
import Workshops from '../components/main/home/workshops'
// import './index.css'
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className="main-screen snap-y overflow-y-scroll overflow-x-hidden snap-mandatory h-screen min-h-fit hide-sb temp">
        <div className='relative h-screen snap-center min-h-[calc(750px)] scroll-smooth ' >
          <Navbar />
          <Hero />
        </div>
        {/* <div className='relative h-screen snap-center min-h-[calc(750px)]' id="events" >
          <TechnicalEvents />
        </div>
        <div className='relative h-screen snap-center min-h-[calc(750px)]' id="events" >
          <NonTechnicalEvents />
        </div>
        <div className='relative h-screen snap-center min-h-[calc(750px)]'>
          <ClubPerformance />
        </div>
        <div className='relative h-screen snap-center min-h-[calc(750px)]'>
          <Workshops />
        </div> */}
        <div className='relative h-screen snap-center min-h-[calc(750px)]'>
          {/* <Skills /> */}
          <div className='flex flex-col items-center  self-center align-middle justify-around h-[80vh]'>

            <h2 className='text-xl md:text-3xl md:tracking-[0.4rem] tracking-[.1rem]  text-white text-center   font-extralight  mb-5  md:mb-0 font-[Eirian] ' >Registration Starting Soon...</h2>
          </div>

          <div className="absolute bottom-12 w-full">
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
