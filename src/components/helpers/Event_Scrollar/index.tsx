import React from 'react'
import Image from 'next/image';
import { useEffect } from 'react'
import { BsCircleFill } from 'react-icons/bs';
function EventScrollar({ event_catag }) {
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
    return (
        <div className="container px-5 mx-auto flex flex-wrap  ">
            {event_catag.map((e, index) => (
                index % 2 === 0 ? <div id={e.id} className="flex flex-col lg:flex-row relative w-full mx-auto overflow-hidden text-white no-scrollbar" key={e.id}>
                    <div className="animation_LR w-full h-full flex justify-center lg:justify-end -translate-x-full pt-12 lg:py-0">
                        <div className={'w-full sm:w-3/5 '}>
                            <Image className='rounded-lg p-0 ' src={e.thumbUrl} width="100%" height="100%" objectFit='contain' layout='responsive' alt={e.title}></Image>
                        </div>
                    </div>
                    <div className="w-1/5 hidden h-full relative lg:flex items-center justify-center">
                        <div className="h-full w-6 absolute left-[calc(50%-12px)] inset-0 flex items-center justify-center ">
                            <div className="h-full w-[2px] bg-gradient-to-b from-[#FB5131] via-[#E93E53] to-[#E02170] pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-10 h-10 rounded-full  inline-flex items-center justify-center text-white relative z-10">
                            <BsCircleFill fill='white' />
                        </div>
                    </div>
                    <div className="animation_RL w-full lg:w-full text-center lg:text-justify flex flex-col justify-center translate-x-full pt-12 lg:py-0">
                        <div className='w-full md:w-4/5 lg:w-3/5 self-center lg:self-start flex flex-col'>
                            <div className='text-xl font-semibold text-center'>{e.title}</div>
                            <div className="py-[calc(2px)] lg:text-left my-2 rounded-xl bg-gradient-to-b from-[#E02170] via-[#E93E53] to-[#FB5131] w-24 self-center"></div>
                            <div className='leading-relaxed  sm:text-lg text-sm'>{e.date}</div>
                            <div className='leading-relaxed  sm:text-lg text-sm'>{e.time}</div>
                            <div className='leading-relaxed sm:text-lg text-sm' dangerouslySetInnerHTML={{ __html: e.desc }} ></div>
                        </div>
                    </div>
                </div> : <div id={e.id} className="flex flex-col lg:flex-row-reverse relative w-full mx-auto overflow-x-hidden text-gray-900 dark:text-gray-400 no-scrollbar" key={e.id} >
                    <div className="animation_RL w-full h-full flex justify-center lg:justify-start translate-x-full pt-12 lg:py-0" >
                        <div className={'w-full sm:w-3/5'}>
                            <Image className='rounded-lg p-0' src={e.thumbUrl} width="100%" height="100%" objectFit='contain' layout='responsive' alt={e.title} ></Image>
                        </div>
                    </div>
                    <div className="w-1/5 hidden h-full relative lg:flex items-center justify-center ">
                        <div className="h-full w-6 absolute left-[calc(50%-12px)] inset-0 flex items-center justify-center ">
                            <div className="h-full w-[2px] bg-gradient-to-b from-[#E02170] via-[#E93E53] to-[#FB5131] pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-10 h-10 rounded-full  inline-flex items-center justify-center text-white relative z-10">
                            <BsCircleFill className='white' />
                        </div>
                    </div>
                    <div className="animation_LR w-full lg:w-full text-center lg:text-justify flex flex-col justify-center -translate-x-full  pt-12 lg:py-0">
                        <div className='w-full md:w-4/5 lg:w-3/5 self-center lg:self-end flex flex-col text-white'>
                            <div className='text-xl font-semibold text-center'>{e.title}</div>
                            <div className="py-[calc(2px)] lg:text-right my-2 rounded-xl bg-gradient-to-b from-[#E02170] via-[#E93E53] to-[#FB5131]  w-24 self-center "></div>
                            <div className='leading-relaxed  sm:text-lg text-sm'>{e.date}</div>
                            <div className='leading-relaxed  sm:text-lg text-sm'>{e.time}</div>
                            <div className='leading-relaxed  sm:text-lg text-sm ' dangerouslySetInnerHTML={{ __html: e.desc }}></div>
                        </div>
                    </div>
                </div>
            ))
            }


        </div>
    )
}

export default EventScrollar