import React, { useEffect, useState } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Planner from '../components/helpers/planner'

function Schedule() {
    const [schedule, setSchedule] = useState(null)
    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_SCHEDULE_URL)
            .then(response => response.json())
            .then(response => {
                // console.log(response)
                setSchedule(response)
            }).catch((err) => {
                console.log(err)
            });
    }, [])

    return (
        <>
            <Header title="Encarta - Schedule" header_content="Encarta schedule" />
            <Navbar />
            <section className=" py-20 lg:py-24  min-h-[50vh] md:min-h-[70vh]">
                {
                    !schedule && <div className='text-white absolute top-[40%] md:top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xl font-bold'>Loading...</div>
                }
                {
                    schedule && <>

                        <div className='text-white text-3xl md:text-4xl lg:text-5xl font-[Backsteal-Regular] mx-auto text-center md:mb-12'>
                            <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#FB5131] via-[#E93E53] to-[#E02170]' >Schedule</h1>
                        </div>

                        <section id='education' className="text-gray-400 body-font mx-auto  mb-4 py-4" >
                            <div className="container px-5 mx-auto">
                                <div className="flex flex-col text-center w-full mt-4 mb-8">
                                    <h1 className="sm:text-3xl text-2xl font-medium title-font  text-white">Day One</h1>
                                </div>
                                <Planner day={schedule[0]} />
                            </div>
                            <div className="container px-5 mx-auto">
                                <div className="flex flex-col text-center w-full mt-4 mb-8">
                                    <h1 className="sm:text-3xl text-2xl font-medium title-font  text-white">Day Two</h1>
                                </div>
                                <Planner day={schedule[1]} />
                            </div>
                            <div className="container px-5 mx-auto">
                                <div className="flex flex-col text-center w-full mt-4 mb-8">
                                    <h1 className="sm:text-3xl text-2xl font-medium title-font  text-white">Day Three</h1>
                                </div>
                                <Planner day={schedule[2]} />
                            </div>
                        </section ></>
                }
            </section>
            <Footer />
        </>
    )
}

export default Schedule