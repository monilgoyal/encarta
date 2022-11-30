import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect } from 'react'
// import { AiFillEye } from 'react-icons/ai'
// import { FiExternalLink, FiGithub } from 'react-icons/fi'
// import { RiYoutubeLine } from 'react-icons/ri'
import { non_tech_events } from '../../data/events'
import { ViewAllButton } from '../helpers/button/viewall'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const NonTechnicalEvents = () => {
    useEffect(() => {
        var ele = document.getElementsByClassName('skills')
        for (let i = 0; i < ele.length; i++) {
            if (ele[i].clientWidth >= ele[i].scrollWidth) {
                ele[i].nextElementSibling.classList.add('hidden')
            }
        }
    })


    const scrollDivRight = (e) => {
        e.target.closest('div').previousSibling.scrollLeft += 200
    }
    const scrollDivLeft = (e) => {
        e.target.closest('div').nextSibling.scrollLeft -= 200
    }
    const IsEnd = (e) => {

        if (e.target.scrollLeft + e.target.clientWidth + 1 >= e.target.scrollWidth) {
            e.target.nextSibling.classList.add("hidden");                       // hide ">" button
        } else {
            e.target.nextSibling.classList.remove("hidden");                    // show ">" button

        }

        if (e.target.scrollLeft > 0) {
            e.target.previousSibling.classList.add("hidden");  // hide "tech" text
            e.target.previousSibling.classList.remove("hidden");               // show "<" button

        } else if (e.target.scrollLeft == 0) {
            e.target.previousSibling.classList.remove("hidden");    // show "tech" text
            e.target.previousSibling.classList.add("hidden");                       // hide "<" button
        }
    }
    return (
        <div className=' flex flex-col justify-center align-middle w-full py-16 lg:py-20'>
            <div className='text-white  text-2xl md:text-3xl lg:text-4xl font-semibold mx-auto text-center'>
                {/* <h1>Non Tech Events</h1> */}
                <h1 className='tracking-[.1em] mr-[-0.1em]  font-[Backsteal-Regular] text-transparent bg-clip-text bg-gradient-to-b from-[#FB5131] via-[#E93E53] to-[#E02170]'>Non Tech Events</h1>

                {/* <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#FB5131] to-[#E02170]" >Events</h1> */}
            </div>
            <div className='relative w-full flex gap-x-6 lg:gap-x-12 snap-x overflow-x-auto  snap-mandatory no-scrollbar mt-[5vh] '>
                <div className="snap-center shrink-0 w-[calc(4%)] md:w-1/12 lg:w-1/6"></div>
                {non_tech_events.map((e) => (
                    <div className="flex flex-wrap-reverse w-4/5 sm:w-2/5 lg:w-3/5 lg:py-0 py-4 px-1 bg-opacity-60 bg-black relative snap-center shrink-0 first:pl-8 last:pr-8 rounded-xl" key={e.id}>
                        <div className="text-center relative z-10 w-full flex flex-wrap-reverse">
                            <div className="w-full lg:w-2/5  text-white ">
                                <div className="relative  w-full h-3/4">
                                    <div className="lg:absolute bottom-0 w-full p-2 text-left">
                                        <div className="flex justify-between my-2">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-[#fff] ">{e.date}</h2>
                                            <h2 className="tracking-widest text-xs title-font font-medium text-[#fff] ">{e.time}</h2>
                                        </div>
                                        <h1 className="title-font sm:text-xl text-lg text-white text-transparent bg-clip-text bg-gradient-to-b from-[#FB5131] to-[#E02170] font-bold mb-1">{e.title}</h1>
                                        <h6 className="title-font sm:text-xs text-xs font-medium text-white mb-2 ">{e.subtitle}</h6>
                                        <span className="leading-relaxed sm:text-base text-sm text-gray-400" dangerouslySetInnerHTML={{ __html: e.desc }} ></span>
                                    </div>
                                </div>
                                <div className="text-center flex flex-col leading-8 justify-center mt-2 w-full  text-gray-500 space-y-2 h-1/5">
                                    <div className="flex mx-2 relative rounded-full">
                                        <div className=" self-center absolute -left-2 bg-gray-900 rounded-full z-10 hidden" onClick={(e) => scrollDivLeft(e)} style={{ backgroundImage: 'linear-gradient(to right bottom, #fb5131, #f94143, #f43253, #eb2762, #e02170)' }}>
                                            <IoIosArrowBack className='text-3xl mx-auto text-white' />
                                        </div>
                                        <div className="skills w-full overflow-x-auto whitespace-nowrap overflow-y-hidden no-scrollbar scroll-smooth" onScroll={(e) => IsEnd(e)}>
                                            {/* <div className="skills w-9/12 overflow-x-auto whitespace-nowrap overflow-y-hidden no-scrollbar scroll-smooth" onScrollCapture={(e) => IsEnd(e)}> */}
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-200 mb-1 inline">Rounds:</h2>

                                            {
                                                e.rounds.split(",").map((techno) => (
                                                    <span className="text-sm rounded-full bg-gray-600 text-gray-300 opacity-70 bg-opacity-50 px-2 py-1 mr-1 my-1" key={techno}>{techno}</span>
                                                ))
                                            }
                                        </div>
                                        <div className=" self-center absolute -right-2 bg-gray-900 rounded-full z-10" onClick={(e) => scrollDivRight(e)} style={{ backgroundImage: 'linear-gradient(to right bottom, #fb5131, #f94143, #f43253, #eb2762, #e02170)' }} >
                                            <IoIosArrowForward className='text-3xl mx-auto text-white' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-3/5 text-white self-center lg:py-10 ">
                                <Image className=' rounded-xl ' src={"https://images.weserv.nl/?url=" + e.thumbUrl + "&w=600&h=400&dpr=2"} width={600} height={400} objectFit="contain" layout='responsive' alt='monil goyal'></Image>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="snap-center shrink-0 w-[calc(4%)] md:w-1/12 lg:w-1/6"></div>

            </div>
            <Link href="/events/#non-tech-event" passHref>
                <div className="md:mt-[5vh] self-center absolute top-[75vh]">
                    <ViewAllButton />
                </div>
            </Link>
        </div>

    )
}

export default NonTechnicalEvents