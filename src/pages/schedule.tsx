import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Planner from '../components/helpers/planner'
import { schedule_day_1, schedule_day_2, schedule_day_3 } from '../data/schedule'

function Schedule() {
    return (
        <>
            <Header title="Encarta - Schedule" header_content="About - Monil Goyal" />
            <Navbar />
            <section className=" py-20 lg:py-24 ">

                <div className='text-white text-3xl md:text-4xl lg:text-5xl font-[Backsteal-Regular] mx-auto text-center md:mb-12'>
                    <h1 className='text-transparent bg-clip-text bg-gradient-to-b from-[#FB5131] via-[#E93E53] to-[#E02170]' >Schedule</h1>
                </div>

                <section id='education' className="text-gray-400 body-font mx-auto  mb-4 py-4" >
                    <div className="container px-5 mx-auto">
                        <div className="flex flex-col text-center w-full mt-4 mb-8">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font  text-white">Day One</h1>
                        </div>
                        <Planner day={schedule_day_1} />
                    </div>
                    <div className="container px-5 mx-auto">
                        <div className="flex flex-col text-center w-full mt-4 mb-8">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font  text-white">Day Two</h1>
                        </div>
                        <Planner day={schedule_day_2} />
                    </div>
                    <div className="container px-5 mx-auto">
                        <div className="flex flex-col text-center w-full mt-4 mb-8">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font  text-white">Day Three</h1>
                        </div>
                        <Planner day={schedule_day_3} />
                    </div>
                </section >
            </section>
            <Footer />
        </>
    )
}

export default Schedule