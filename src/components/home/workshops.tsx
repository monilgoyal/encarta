// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useSelector } from 'react-redux'
// import { RootState } from '../../state/reducers'
// import { EventInitialState } from '../../state/reducers/eventDataReducer'
// const Workshops = () => {
//     const events = useSelector((state: RootState) => state.EventData)
//     const ws = events.Events.WORKSHOP ? events.Events.WORKSHOP.game_dev : {}
//     return (
//         <div className="text-gray-400 body-font bg-transparent  px-5  mx-auto">
//             <div className='text-white  text-2xl md:text-3xl lg:text-4xl font-semibold mx-auto text-center mb-[5vh]'>
//                 <h1 className='tracking-[.1em] mr-[-0.1em]  font-[Backsteal-Regular] text-transparent bg-clip-text bg-gradient-to-r from-[#FB5131] via-[#E93E53] to-[#E02170]'>Workshops</h1>
//             </div>
//             {JSON.stringify(EventInitialState) == JSON.stringify(events) && <div className='text-white absolute top-[40%] md:top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xl font-bold animate-pulse'>Loading...</div>}

//             {JSON.stringify(EventInitialState) != JSON.stringify(events) &&
//                 <div className="flex flex-wrap-reverse w-4/5 sm:w-2/5 lg:w-3/5 lg:py-0 py-4 px-1  relative snap-center shrink-0 first:pl-8 last:pr-8 rounded-xl z-0 border-2 border-white border-opacity-10 backdrop-blur-sm bg-black/60 mx-auto " >
//                     {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FB5131] via-[#E93E53] to-[#E02170]  rounded-xl blur-sm opacity-30 mx-1 my-3"></div> */}
//                     <div className="text-center relative z-10 w-full flex flex-wrap-reverse   lg:my-2 rounded-xl">
//                         <div className="w-full lg:w-2/5  text-white  ">

//                             <div className={"relative  w-full h-[90%]"}>
//                                 {/* <div className={"relative  w-full ".concat(" ", ws.rounds === "" ? "h-[90%]" : "h-3/4")}> */}
//                                 <div className="lg:absolute bottom-0 w-full p-2 text-left">
//                                     <Link href={`/workshop/game_development`} passHref >
//                                         <a>

//                                             <h1 className="title-font  text-white text-transparent bg-clip-text bg-gradient-to-b from-[#FB5131] to-[#E02170]  mb-1 cursor-pointer font-[Andika-Regular] text-base md:text-xl  font-semibold">{ws.title}</h1>
//                                         </a>
//                                     </Link>
//                                     {/* <h6 className="title-font sm:text-xs text-xs font-medium text-white mb-2 ">{ws.subtitle}</h6> */}
//                                     <Link href={`/workshop/game_development`} passHref >
//                                         <a>
//                                             <div className="leading-relaxed sm:text-base text-sm text-white text-justify cursor-pointer" dangerouslySetInnerHTML={{ __html: ws.desc.substring(0, 100).concat(ws.desc.length > 100 ? `  ...<span style="color:#E93E53;cursor:pointer;">Read More</span>` : '') }} ></div>
//                                         </a>
//                                     </Link>
//                                     {
//                                         ws.venue &&
//                                         <div className="leading-relaxed sm:text-base text-sm text-gray-400 mt-2"  >Venue : {ws.venue}</div>
//                                     }
//                                     {
//                                         ws.fee &&
//                                         <div className="leading-relaxed sm:text-base text-sm text-gray-400 ">Fee : {ws.fee[0] != "Free" ? "₹" + ws.fee[0] : "Free"}</div>
//                                     }
//                                     {
//                                         ws.type &&
//                                         <div className="leading-relaxed sm:text-base text-sm text-gray-400 " >Entry : {ws.type}</div>
//                                     }
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="w-full lg:w-3/5 text-white self-center lg:py-10 ">
//                             <Image className=' rounded-xl' src='https://cdn.dorik.com/6170fc2c54b34900117ea7a5/632a2aa24a33d3001191b969/images/Untitled-design-10_vn51z0c9.png' width={550} height={400} objectFit="contain" layout='responsive' alt='game_development'></Image>
//                         </div>
//                     </div>
//                 </div>
//             }
//         </div>


//     )
// }

// export default Workshops



import Link from 'next/link'
import { ViewAllButton } from '../helpers/button/viewall'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import { RootState } from '../../state/reducers'
import { EventInitialState } from '../../state/reducers/eventDataReducer'
import EventCard from '../helpers/Cards/event'

const Workshops = () => {
    const events = useSelector((state: RootState) => state.EventData)
    const ws = events.Events.WORKSHOP ? events.Events.WORKSHOP.game_dev : {}
    return (
        <div className=' flex flex-col justify-center align-middle w-full py-16 lg:py-20'>
            <div className='text-white  text-2xl md:text-3xl lg:text-4xl font-semibold mx-auto text-center'>
                <h1 className='tracking-[.1em] mr-[-0.1em]  font-[Backsteal-Regular] text-transparent bg-clip-text bg-gradient-to-r from-[#FB5131] via-[#E93E53] to-[#E02170]'>Workshops</h1>
            </div>
            {JSON.stringify(EventInitialState) == JSON.stringify(events) && <div className='text-white absolute top-[40%] md:top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xl font-bold animate-pulse'>Loading...</div>}
            <div className='relative w-full flex gap-x-6 lg:gap-x-12 snap-x overflow-x-auto  snap-mandatory no-scrollbar mt-[5vh] '>
                <div className="snap-center shrink-0 w-[calc(4%)] md:w-1/12 lg:w-1/6"></div>
                {JSON.stringify(EventInitialState) != JSON.stringify(events) && events.Events.WORKSHOP &&
                    <div className="flex flex-wrap-reverse w-4/5 sm:w-2/5 lg:w-3/5 lg:py-0 py-4 px-1  relative snap-center shrink-0 first:pl-8 last:pr-8 rounded-xl z-0 border-2 border-white border-opacity-10 backdrop-blur-sm bg-black/60 mx-auto " >
                        {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FB5131] via-[#E93E53] to-[#E02170]  rounded-xl blur-sm opacity-30 mx-1 my-3"></div> */}
                        <div className="text-center relative z-10 w-full flex flex-wrap-reverse   lg:my-2 rounded-xl">
                            <div className="w-full lg:w-2/5  text-white  ">

                                <div className={"relative  w-full h-[90%]"}>
                                    {/* <div className={"relative  w-full ".concat(" ", ws.rounds === "" ? "h-[90%]" : "h-3/4")}> */}
                                    <div className="lg:absolute bottom-0 w-full p-2 text-left">
                                        <Link href={`/workshop/game_development`} passHref >
                                            <a>

                                                <h1 className="title-font  text-white text-transparent bg-clip-text bg-gradient-to-b from-[#FB5131] to-[#E02170]  mb-1 cursor-pointer font-[Andika-Regular] text-base md:text-xl  font-semibold">{ws.title}</h1>
                                            </a>
                                        </Link>
                                        {/* <h6 className="title-font sm:text-xs text-xs font-medium text-white mb-2 ">{ws.subtitle}</h6> */}
                                        <Link href={`/workshop/game_development`} passHref >
                                            <a>
                                                <div className="leading-relaxed sm:text-base text-sm text-white text-justify cursor-pointer" dangerouslySetInnerHTML={{ __html: ws.desc.substring(0, 100).concat(ws.desc.length > 100 ? `  ...<span style="color:#E93E53;cursor:pointer;">Read More</span>` : '') }} ></div>
                                            </a>
                                        </Link>
                                        {
                                            ws.venue &&
                                            <div className="leading-relaxed sm:text-base text-sm text-gray-400 mt-2"  >Venue : {ws.venue}</div>
                                        }
                                        {
                                            ws.fee &&
                                            <div className="leading-relaxed sm:text-base text-sm text-gray-400 ">Fee : {ws.fee[0] != "Free" ? "₹" + ws.fee[0] : "Free"}</div>
                                        }
                                        {
                                            ws.type &&
                                            <div className="leading-relaxed sm:text-base text-sm text-gray-400 " >Entry : {ws.type}</div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-3/5 text-white self-center lg:py-10 ">
                                <Image className=' rounded-xl' src='https://cdn.dorik.com/6170fc2c54b34900117ea7a5/632a2aa24a33d3001191b969/images/Untitled-design-10_vn51z0c9.png' width={550} height={400} objectFit="contain" layout='responsive' alt='game_development'></Image>
                            </div>
                        </div>
                    </div>
                }
                <div className="snap-center shrink-0 w-[calc(4%)] md:w-1/12 lg:w-1/6" ></div>

            </div >
        </div >

    )
}

export default Workshops
