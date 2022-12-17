import React from 'react'
import Image from 'next/image'
import { RootState } from '../../state/reducers'
import { useSelector } from 'react-redux'
import { EventInitialState } from '../../state/reducers/eventDataReducer'

const Speakers = () => {
    const events = useSelector((state: RootState) => state.EventData)

    return (
        <section className="text-gray-400 body-font bg-transparent">
            <div className="container px-5 py-12 mx-auto">
                <div className='text-white  text-3xl md:text-4xl lg:text-5xl font-semibold mx-auto text-center'>
                    <h1 className='tracking-[.1em] mr-[-0.1em]  font-[Backsteal-Regular] text-transparent bg-clip-text bg-gradient-to-r from-[#FB5131] via-[#E93E53] to-[#E02170] sm:py-4'>Spearkers</h1>
                </div>
                {JSON.stringify(EventInitialState) == JSON.stringify(events) && <div className='text-white absolute top-[40%] md:top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xl font-bold animate-pulse'>Loading...</div>}
                <div className=' flex flex-col md:flex-row justify-around mt-4 gap-8 align-middle'>
                    {JSON.stringify(EventInitialState) != JSON.stringify(events) && Object.values(events.Events.SPEAKERS).map((e: any) => (

                        <div id={e.id} className="bg-white block rounded-lg shadow-lg  mx-auto  md:w-[25vw] min-w-[280px] h-full" key={e.id}>
                            <div className=" md:h-80  relative overflow-hidden bg-no-repeat bg-cover">
                                <Image className=' w-full rounded-t-lg  ' src={e.thumbUrl} width={600} height={500} objectFit="cover" layout='responsive' alt="love babar"></Image>

                                <a href="#!">
                                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                                </a>
                                <svg className="absolute left-0 bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                    <path fill="#fff"
                                        d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                                    </path>
                                </svg>
                            </div>

                            <div className="md:h-44 text-center flex flex-col justify-center align-middle items-center">
                                <h5 className="text-lg font-bold ">{e.title}</h5>
                                <p className="text-gray-500">{e.desc}</p>
                                <p className="text-gray-500">Date : {e.date}, {e.time}</p>
                            </div>
                        </div>
                    ))}

                </div>
                {/* <div className="mb-6 lg:mb-0 max-w-[250px] md:max-w-[60%]  text-gray-800 text-center md:grid md:grid-cols-2 md:gap-16 mx-auto">

                    <div className="bg-white block rounded-lg shadow-lg mt-8 md:mt-0">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover">
                            <Image className=' w-full rounded-t-lg  ' src={"https://images.weserv.nl/?url=https://imgs.search.brave.com/8uIUIJwmrmC0ltFjziS_ocsbnT6nT0XmfwQSoEt1IkU/rs:fit:1200:702:1/g:ce/aHR0cHM6Ly9pbXB1/bHNlLmlvc2QudGVj/aC9hc3NldHMvaW1n/L2FtbjMuanBn"} width={600} height={500} objectFit="cover" layout='responsive' alt="love babar"></Image>

                            <a href="#!">
                                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                            </a>
                            <svg className="absolute left-0 bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path fill="#fff"
                                    d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                                </path>
                            </svg>
                        </div>
                        <div className="p-2">
                            <h5 className="text-lg font-bold ">Aman Dhattarwal</h5>
                            <p className="text-gray-500">Founder of Apna College</p>
                            <p className="text-gray-500">Date : 25 Dec 2022, 12:00Am</p>

                        </div>
                    </div>
                    <div className="bg-white block rounded-lg shadow-lg mt-8 md:mt-0">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover">
                            <Image className=' w-full rounded-t-lg  ' src={"https://images.weserv.nl/?url=https://imgs.search.brave.com/8uIUIJwmrmC0ltFjziS_ocsbnT6nT0XmfwQSoEt1IkU/rs:fit:1200:702:1/g:ce/aHR0cHM6Ly9pbXB1/bHNlLmlvc2QudGVj/aC9hc3NldHMvaW1n/L2FtbjMuanBn"} width={600} height={500} objectFit="cover" layout='responsive' alt="love babar"></Image>

                            <a href="#!">
                                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                            </a>
                            <svg className="absolute left-0 bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path fill="#fff"
                                    d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                                </path>
                            </svg>
                        </div>
                        <div className="p-2">
                            <h5 className="text-lg font-bold ">Aman Dhattarwal</h5>
                            <p className="text-gray-500">Founder of Apna College</p>
                            <p className="text-gray-500">Date : 25 Dec 2022, 12:00Am</p>

                        </div>
                    </div>
                </div> */}
            </div >
        </section >


    )
}

export default Speakers