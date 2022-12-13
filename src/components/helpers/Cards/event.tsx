import Link from 'next/link'
import React, { useEffect } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Image from 'next/image'
function EventCard({ e, type }) {
    useEffect(() => {
        var ele = document.getElementsByClassName('skills')
        for (let i = 0; i < ele.length; i++) {
            if (ele[i].clientWidth >= ele[i].scrollWidth) {
                ele[i].nextElementSibling.classList.add('hidden')
            }
        }
    })
    return (
        <div className="flex flex-wrap-reverse w-4/5 sm:w-2/5 lg:w-3/5 lg:py-0 py-4 px-1  relative snap-center shrink-0 first:pl-8 last:pr-8 rounded-xl z-0 border-2 border-white border-opacity-10 backdrop-blur-sm bg-black/60" key={e.id}>
            {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FB5131] via-[#E93E53] to-[#E02170]  rounded-xl blur-sm opacity-30 mx-1 my-3"></div> */}
            <div className="text-center relative z-10 w-full flex flex-wrap-reverse   lg:my-2 rounded-xl">
                <div className="w-full lg:w-2/5  text-white  ">

                    <div className={"relative  w-full h-[90%]"}>
                        {/* <div className={"relative  w-full ".concat(" ", e.rounds === "" ? "h-[90%]" : "h-3/4")}> */}
                        <div className="lg:absolute bottom-0 w-full p-2 text-left">
                            <Link href={`/event/${type}/${e.id}`} passHref >
                                <h1 className="title-font  text-white text-transparent bg-clip-text bg-gradient-to-b from-[#FB5131] to-[#E02170]  mb-1 cursor-pointer font-[Andika-Regular] text-base md:text-xl  font-semibold">{e.title}</h1>
                            </Link>
                            {/* <h6 className="title-font sm:text-xs text-xs font-medium text-white mb-2 ">{e.subtitle}</h6> */}
                            <Link href={`/event/${type}/${e.id}`} passHref >
                                <div className="leading-relaxed sm:text-base text-sm text-white text-justify cursor-pointer" dangerouslySetInnerHTML={{ __html: e.desc.substring(0, 100).concat(e.desc.length > 100 ? `  ...<span style="color:#E93E53;cursor:pointer;">Read More</span>` : '') }} ></div>
                            </Link>
                            <Link href={`/event/${type}/${e.id}`} passHref >
                                <div className="leading-relaxed sm:text-base text-sm text-gray-400 mt-2" dangerouslySetInnerHTML={{ __html: e.detail }} ></div>
                            </Link>
                            {
                                e.venue &&
                                <div className="leading-relaxed sm:text-base text-sm text-gray-400 mt-2"  >Venue : {e.venue}</div>
                            }
                            {
                                e.fee &&
                                <div className="leading-relaxed sm:text-base text-sm text-gray-400 ">Fee : {e.fee[0] != "Free" ? "₹" + e.fee[0] : "Free"}</div>
                            }
                            {
                                e.type &&
                                <div className="leading-relaxed sm:text-base text-sm text-gray-400 " >Entry : {e.type}</div>
                            }
                        </div>
                    </div>
                    {/* {
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
                    } */}
                </div>
                <div className="w-full lg:w-3/5 text-white self-center lg:py-10 ">
                    <Image className=' rounded-xl' src={e.thumbUrl} width={550} height={400} objectFit="contain" layout='responsive' alt='monil goyal'></Image>
                </div>
            </div>
        </div>
    )
}

export default EventCard