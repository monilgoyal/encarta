import React from 'react'
import Image from 'next/image';
import { useEffect } from 'react'
import { BsCircleFill } from 'react-icons/bs';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
function EventScrollar({ type, event_catag }) {
    useEffect(() => {


        const RL_targets = document.querySelectorAll(".animation_RL");
        const LR_targets = document.querySelectorAll(".animation_LR");

        // Callback for IntersectionObserver
        const callback_for_RL = function (entries) {
            entries.forEach(entry => {

                // Is the element in the viewport? 
                if (entry.isIntersecting) {

                    // Add the fadeIn class:
                    entry.target.classList.add("motion-safe:animate-aosLtoR");
                    // entry.target.classList.remove("motion-safe:animate-[aosRtoL_2s_reverse]");
                } else {

                    // Otherwise remove the fadein class
                    entry.target.classList.remove("motion-safe:animate-aosLtoR");
                    // entry.target.classList.add("motion-safe:animate-[aosRtoL_2s_reverse]");
                }
            });
        };
        const callback_for_LR = function (entries) {
            entries.forEach(entry => {

                // Is the element in the viewport? 
                if (entry.isIntersecting) {

                    // Add the fadeIn class:
                    entry.target.classList.add("motion-safe:animate-aosRtoL");
                    // entry.target.classList.remove("motion-safe:animate-[aosRtoL_2s_reverse]");
                } else {

                    // Otherwise remove the fadein class
                    entry.target.classList.remove("motion-safe:animate-aosRtoL");
                    // entry.target.classList.add("motion-safe:animate-[aosRtoL_2s_reverse]");
                }
            });
        };

        // Set up a new observer for Right to Left
        const RL_observer = new IntersectionObserver(callback_for_RL);
        // Set up a new observer for Left to Right
        const LR_observer = new IntersectionObserver(callback_for_LR);

        // Loop through each of the target RL
        RL_targets.forEach(function (target) {
            // Add the element to the watcher
            RL_observer.observe(target);
        });
        // Loop through each of the target LR
        LR_targets.forEach(function (target) {
            // Add the element to the watcher
            LR_observer.observe(target);
        });


    })
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
        <div className="container px-5 mx-auto flex flex-wrap  ">
            {event_catag.map((e, index) => (
                index % 2 === 0 ? <div id={e.id} className="flex flex-col lg:flex-row relative w-full mx-auto overflow-hidden text-white no-scrollbar border-2 border-white border-opacity-10 backdrop-blur-sm bg-black/60 rounded-xl lg:border-0 lg:bg-transparent lg:backdrop-blur-0 my-2 lg:my-0" key={e.id}>
                    <div className="animation_LR w-full h-full flex justify-center lg:justify-end -translate-x-full  lg:py-8">
                        <Link href={`/event/${type}/${e.id}`} passHref >
                            <div className='w-4/5 sm:w-3/5 pt-4  lg:pt-0'>
                                <Image className='rounded-lg p-0 cursor-pointer' src={e.thumbUrl} width="100%" height="100%" objectFit='contain' layout='responsive' alt={e.title}></Image>
                            </div>
                        </Link>
                    </div>
                    <div className="w-1/5 hidden h-full relative lg:flex items-center justify-center">
                        <div className="h-full w-6 absolute left-[calc(50%-12px)] inset-0 flex items-center justify-center ">
                            <div className="h-full w-[2px] bg-gradient-to-b from-[#FB5131] via-[#E93E53] to-[#E02170] pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-10 h-10 rounded-full  inline-flex items-center justify-center text-white relative z-10">
                            <BsCircleFill fill='white' />
                        </div>
                    </div>
                    <div className="animation_RL w-full lg:w-full text-center lg:text-justify flex flex-col justify-center translate-x-full  lg:py-8">
                        <div className='w-full text-sm lg:text-lg md:w-4/5 lg:w-3/5 self-center lg:self-start flex flex-col lg:border-2 border-white border-opacity-10 lg:backdrop-blur-sm lg:bg-black/60 rounded-xl py-4 border-0 bg-transparent backdrop-blur-0'>
                            <Link href={`/event/${type}/${e.id}`} passHref >
                                <a>
                                    <div className='text-xl font-semibold text-center cursor-pointer'>{e.title}</div>
                                </a>
                            </Link>
                            <div className="py-[calc(2px)] lg:text-left my-2 rounded-xl bg-gradient-to-b from-[#E02170] via-[#E93E53] to-[#FB5131] w-24 self-center"></div>
                            <div className=' font-medium text-center'>Fee: ₹{e.fee[0]}</div>
                            <div className=' font-medium text-center'>Entry: {e.type}</div>
                            {e.mode &&
                                <div className=' font-medium text-center'>Mode: {e.mode}</div>
                            }
                            {e.venue &&
                                <div className=' font-medium text-center'>Venue: {e.venue}</div>
                            }
                            {
                                e.rounds != "" &&
                                <div className="text-center flex flex-col leading-8 justify-center mt-2 w-full  text-gray-500 space-y-2 h-1/5">
                                    <div className="flex mx-2 relative rounded-full">
                                        <div className=" cursor-pointer self-center absolute -left-2 bg-gray-900 rounded-full z-10 hidden" onClick={(e) => scrollDivLeft(e)} style={{ backgroundImage: 'linear-gradient(to right bottom, #fb5131, #f94143, #f43253, #eb2762, #e02170)' }}>
                                            <IoIosArrowBack className='text-3xl mx-auto text-white' />
                                        </div>
                                        <div className="skills w-full overflow-x-auto whitespace-nowrap overflow-y-hidden no-scrollbar scroll-smooth" onScroll={(e) => IsEnd(e)}>
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-200 mb-1 inline">Rounds:</h2>

                                            {
                                                e.rounds.split("|").map((techno) => (
                                                    <span className="text-sm rounded-full bg-gray-600 text-gray-300 opacity-70 bg-opacity-50 px-2 py-1 mr-1 my-1" key={techno}>{techno}</span>
                                                ))
                                            }
                                        </div>
                                        <div className="cursor-pointer self-center absolute -right-2 bg-gray-900 rounded-full z-10" onClick={(e) => scrollDivRight(e)} style={{ backgroundImage: 'linear-gradient(to right bottom, #fb5131, #f94143, #f43253, #eb2762, #e02170)' }} >
                                            <IoIosArrowForward className='text-3xl mx-auto text-white' />
                                        </div>
                                    </div>
                                </div>
                            }
                            {/* <div className='leading-relaxed sm:text-lg text-sm' dangerouslySetInnerHTML={{ __html: e.desc }} ></div> */}
                        </div>
                    </div>
                </div> : <div id={e.id} className="flex flex-col lg:flex-row-reverse relative w-full mx-auto overflow-x-hidden text-gray-900 dark:text-gray-400 no-scrollbar border-2 border-white border-opacity-10 backdrop-blur-sm bg-black/60 rounded-xl lg:border-0 lg:bg-transparent lg:backdrop-blur-0 my-2 lg:my-0" key={e.id} >
                    <div className="animation_RL w-full h-full flex justify-center lg:justify-start translate-x-full lg:py-8" >
                        <Link href={`/event/${type}/${e.id}`} passHref >
                            <div className='w-4/5 sm:w-3/5 pt-4 lg:pt-0'>
                                <Image className='rounded-lg p-0 cursor-pointer' src={e.thumbUrl} width="100%" height="100%" objectFit='contain' layout='responsive' alt={e.title} ></Image>
                            </div>
                        </Link>
                    </div>
                    <div className="w-1/5 hidden h-full relative lg:flex items-center justify-center ">
                        <div className="h-full w-6 absolute left-[calc(50%-12px)] inset-0 flex items-center justify-center ">
                            <div className="h-full w-[2px] bg-gradient-to-b from-[#E02170] via-[#E93E53] to-[#FB5131] pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-10 h-10 rounded-full  inline-flex items-center justify-center text-white relative z-10">
                            <BsCircleFill className='white' />
                        </div>
                    </div>
                    <div className="animation_LR w-full lg:w-full text-center lg:text-justify flex flex-col justify-center -translate-x-full lg:py-8 ">
                        <div className='text-sm lg:text-lg w-full md:w-4/5 lg:w-3/5 self-center lg:self-end flex flex-col text-white lg:border-2 border-white border-opacity-10 lg:backdrop-blur-sm lg:bg-black/60 rounded-xl py-4 border-0 bg-transparent backdrop-blur-0 '>
                            <Link href={`/event/${type}/${e.id}`} passHref >
                                <div className='text-xl font-semibold text-center cursor-pointer'>{e.title}</div>
                            </Link>
                            <div className="py-[calc(2px)] lg:text-right my-2 rounded-xl bg-gradient-to-b from-[#E02170] via-[#E93E53] to-[#FB5131]  w-24 self-center "></div>
                            <div className='  font-medium text-center'>Fee: ₹{e.fee[0]}</div>
                            <div className=' font-medium text-center'>Entry: {e.type}</div>
                            {e.mode &&
                                <div className=' font-medium text-center'>Mode: {e.mode}</div>
                            }
                            {e.venue &&
                                <div className=' font-medium text-center'>Venue: {e.venue}</div>
                            }
                            {
                                e.rounds != "" &&
                                <div className="text-center flex flex-col leading-8 justify-center mt-2 w-full  text-gray-500 space-y-2 h-1/5">
                                    <div className="flex mx-2 relative rounded-full">
                                        <div className=" self-center absolute -left-2 bg-gray-900 rounded-full z-10 hidden" onClick={(e) => scrollDivLeft(e)} style={{ backgroundImage: 'linear-gradient(to right bottom, #fb5131, #f94143, #f43253, #eb2762, #e02170)' }}>
                                            <IoIosArrowBack className='text-3xl mx-auto text-white' />
                                        </div>
                                        <div className="skills w-full overflow-x-auto whitespace-nowrap overflow-y-hidden no-scrollbar scroll-smooth" onScroll={(e) => IsEnd(e)}>
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-200 mb-1 inline">Rounds:</h2>

                                            {
                                                e.rounds.split("|").map((techno) => (
                                                    <span className="text-sm rounded-full bg-gray-600 text-gray-300 opacity-70 bg-opacity-50 px-2 py-1 mr-1 my-1" key={techno}>{techno}</span>
                                                ))
                                            }
                                        </div>
                                        <div className=" self-center absolute -right-2 bg-gray-900 rounded-full z-10" onClick={(e) => scrollDivRight(e)} style={{ backgroundImage: 'linear-gradient(to right bottom, #fb5131, #f94143, #f43253, #eb2762, #e02170)' }} >
                                            <IoIosArrowForward className='text-3xl mx-auto text-white' />
                                        </div>
                                    </div>
                                </div>
                            }
                            {/* <div className='leading-relaxed  sm:text-lg text-sm ' dangerouslySetInnerHTML={{ __html: e.desc }}></div> */}
                        </div>
                    </div>
                </div>
            ))
            }


        </div>
    )
}

export default EventScrollar