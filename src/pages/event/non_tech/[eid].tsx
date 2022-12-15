import { useRouter } from 'next/router'
import Footer from '../../../components/footer'
import Header from '../../../components/header'
import Navbar from '../../../components/navbar'
import Image from 'next/image'
import { useState } from 'react'
import Error from 'next/error'
import { useSelector } from 'react-redux'
import { RootState } from '../../../state/reducers'
import { ViewAllButton } from '../../../components/helpers/button/viewall'
const EventPost = () => {
    const [rounds, setRounds] = useState(0)
    const router = useRouter()
    const { eid } = router.query
    const events = useSelector((state: RootState) => state.EventData)

    const data = events.Events.NON_TECH ? events.Events.NON_TECH[eid.toString()] : null
    return (<>
        <Header title="Encarta - Events" header_content="Events in Encarta" />
        <Navbar />
        <section className="text-gray-600 body-font overflow-hidden min-h-[70vh]">
            {!data && <div className='text-white absolute top-[40%] md:top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xl font-bold animate-pulse'>Loading...</div>}
            {
                data && JSON.stringify({}) != JSON.stringify(data) &&
                <div className="container px-5 py-12 md:py-24 mx-auto">
                    <div className='text-white text-2xl md:text-3xl lg:text-4xl font-[Backsteal-Regular] mx-auto text-center mb-6 md:mb-12'>
                        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#FB5131] via-[#E93E53] to-[#E02170]' >{data.title}</h1>
                    </div>
                    <div className="lg:w-4/5 mx-auto flex flex-wrap-reverse border-2 border-white border-opacity-10 backdrop-blur-[2px] bg-black/60 rounded-xl px-2">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 text-white">
                            <div className='leading-relaxed text-sm md:text-base text-justify' dangerouslySetInnerHTML={{ __html: data.desc }} ></div>
                            {data.rules && data.rules.length != 0 && <>
                                <h3 className='text-lg mt-3 font-semibold bg-clip-text bg-gradient-to-b from-[#FB5131] to-[#E02170]  text-transparent'>Guidelines :-</h3>
                                <ol className=' mt-3 text-sm md:text-base'>

                                    {
                                        data.rules.map((e: any, i) => (
                                            <li className='mb-3' key={i}>{data.rules[i]}</li>
                                        ))
                                    }
                                </ol>
                            </>
                            }
                            {
                                data.roundDetails && data.roundDetails[rounds] && <>

                                    <div className="flex mt-3 text-center text-base font-semibold  cursor-pointer ">
                                        {
                                            data.roundDetails.map((d: any, index) => (
                                                <span className={"flex-grow border-b-2 py-2  px-1  bg-clip-text bg-gradient-to-b from-[#FB5131] via-[#E93E53] to-[#E02170] ".concat(' ', rounds == index ? 'border-b-[#E93E53] text-transparent' : 'border-b-white text-white')} onClick={() => setRounds(index)} key={d.id}>Round {index + 1}</span>
                                            ))
                                        }
                                    </div>
                                    <div className='flex flex-col text-xl mt-3'>
                                        <h1 className="title-font  text-white text-xs md:text-sm  font-normal">{data.roundDetails[rounds].schedule}</h1>
                                    </div>
                                    <div className='flex flex-col text-xl mt-3' >
                                        <h1 className="title-font  text-white text-transparent bg-clip-text bg-gradient-to-b from-[#FB5131] to-[#E02170]  mb-1 cursor-pointer font-[Andika-Regular] text-base md:text-xl  font-semibold">{data.roundDetails[rounds].name}</h1>
                                    </div>
                                    <ol className=' mt-3 text-sm md:text-base h-72 overflow-y-scroll '>

                                        {
                                            data.roundDetails[rounds].desc.map((d: any, i) => (
                                                <li className='mb-3' key={i}>{d}</li>
                                            ))
                                        }
                                    </ol>
                                </>
                            }
                            <div className="flex border-t border-gray-200 py-2 mt-3">
                                <span className="text-white">Event Type</span>
                                <span className="ml-auto text-white">Non-Technical</span>
                            </div>
                            {data.mode && <div className="flex border-t border-gray-200 py-2">
                                <span className="text-white">Mode</span>
                                <span className="ml-auto text-white">{data.mode}</span>
                            </div>}
                            {data.venue &&
                                <div className="flex border-t border-gray-200 py-2">
                                    <span className="text-white">Venue</span>
                                    <span className="ml-auto text-white">{data.venue}</span>
                                </div>}
                            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                <span className="text-white">Entry</span>
                                <span className="ml-auto text-white">{data.type}</span>
                            </div>
                            <div className="flex ">
                                <span className="title-font font-medium text-base md:text-lg lg:text-xl text-white ">{data.fee[0] != "Free" ? "₹" + data.fee[0] : "Free"}</span>
                                {!data.pid && data.rlink && <a href={data.rlink} className="bg-gradient-to-r from-[#fb5131] via-[#f43253] to-[#e02170] flex ml-auto text-white border-0 py-2 px-6 focus:outline-none rounded">Register</a>}
                                {data.pid && <div className="flex ml-auto border-0   focus:outline-none rounded">
                                    <ViewAllButton id={data.pid} />
                                </div>}
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full text-white py-4 lg:py-10 ">
                            <Image className=' rounded-xl' src={data.thumbUrl} width={600} height={400} objectFit="contain" layout='responsive' alt='event'></Image>
                        </div>
                    </div>
                </div>
            }
        </section>
        <Footer />

    </>
    )
}

export default EventPost