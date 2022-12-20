import Footer from '../../components/footer'
import Header from '../../components/header'
import Navbar from '../../components/navbar'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '../../state/reducers'
// import { ViewAllButton } from '../../components/helpers/button/viewall'
import Planner from '../../components/helpers/planner'
import { ViewAllButton } from '../../components/helpers/button/viewall'
import { EventInitialState } from '../../state/reducers/eventDataReducer'
const ComboPost = () => {
    const events = useSelector((state: RootState) => state.EventData)
    const workshop = events.Events.WORKSHOP ? events.Events.WORKSHOP.game_dev : {}
    return (<>
        <Header title="Encarta - Events" header_content="Events in Encarta" />
        <Navbar />

        <section className="text-white body-font py-6 md:py-12 min-h-[70vh]">
            <div className='text-white text-2xl md:text-3xl lg:text-4xl font-[Backsteal-Regular] mx-auto text-center mb-6 md:mb-12'>
                <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#FB5131] via-[#E93E53] to-[#E02170]' >Workshop</h1>
            </div>
            {JSON.stringify(EventInitialState) == JSON.stringify(events) && <div className='text-white absolute top-[40%] md:top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xl font-bold animate-pulse'>Loading...</div>}
            <div className="container px-5 py-6 mx-auto flex flex-col max-w-4xl">
                {JSON.stringify(EventInitialState) != JSON.stringify(events) && events.Events.WORKSHOP &&
                    <div className='px-4 border-2 border-white border-opacity-10 backdrop-blur-[2px] bg-black/60 rounded-xl mb-6 pb-6'>
                        <div className="rounded-lg w-full mt-6 mb-6">
                            <Image className=' rounded-xl' src={workshop.thumbUrl} width={1200} height={600} objectFit="contain" layout='responsive' alt='game_development_workshop'></Image>
                        </div>
                        <h1 className=" md:text-3xl text-xl font-medium title-font  text-white  mx-auto text-center">About</h1>
                        <div className="py-[calc(2px)] my-2 rounded-xl bg-gradient-to-b from-[#E02170] via-[#E93E53] to-[#FB5131] w-24 self-center mx-auto"></div>
                        <div className="container px-5 py-6 mx-auto flex flex-col text-white">
                            <div className="text-justify ">
                                <p className="leading-relaxed text-sm md:text-base mb-4 " >
                                    Students will benefit from this game development workshop by becoming more familiar with and interested in the rapidly expanding game development industry. They will also gain a basic understanding of the unity 2d/3d game production environment and game design.
                                </p>
                            </div>
                        </div>
                        <h1 className=" md:text-3xl text-xl font-medium title-font  text-white  mx-auto text-center">Guidelines</h1>
                        <div className="py-[calc(2px)] my-2 rounded-xl bg-gradient-to-b from-[#E02170] via-[#E93E53] to-[#FB5131] w-24 self-center mx-auto"></div>
                        {workshop && workshop.rules.length != 0 &&
                            <ol className='px-5 py-6  text-sm md:text-base'>

                                {
                                    workshop.rules.map((e: any, i) => (
                                        <li className='mb-3' key={i}>{workshop.rules[i]}</li>
                                    ))
                                }
                            </ol>
                        }
                        <h1 className=" md:text-3xl text-xl font-medium title-font  text-white  mx-auto text-center">Schedule</h1>
                        <div className="py-[calc(2px)] my-2 rounded-xl bg-gradient-to-b from-[#E02170] via-[#E93E53] to-[#FB5131] w-24 self-center mx-auto"></div>

                        <div className="  mx-auto mt-6">
                            <div className="flex flex-col text-center w-full mt-4 mb-8">
                                <h1 className=" md:text-2xl text-lg font-medium title-font  text-white">Day One</h1>
                            </div>
                            <Planner day={workshop.schedule[0]} />
                        </div>
                        <div className="  mx-auto">
                            <div className="flex flex-col text-center w-full mt-4 mb-8">
                                <h1 className="md:text-2xl text-lg font-medium title-font  text-white">Day Two</h1>
                            </div>
                            <Planner day={workshop.schedule[1]} />
                        </div>
                        <div className=" mx-auto">
                            <div className="flex flex-col text-center w-full mt-4 mb-8">
                                <h1 className="md:text-2xl text-lg font-medium title-font  text-white">Day Three</h1>
                            </div>
                            <Planner day={workshop.schedule[2]} />
                        </div>
                        <div className="flex border-t border-gray-200 py-2 mt-3">
                            <span className="text-white">Event Type</span>
                            <span className="ml-auto text-white">Workshop</span>
                        </div>
                        {workshop.mode && <div className="flex border-t border-gray-200 py-2">
                            <span className="text-white">Mode</span>
                            <span className="ml-auto text-white">{workshop.mode}</span>
                        </div>}
                        {workshop.venue &&
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-white">Venue</span>
                                <span className="ml-auto text-white">{workshop.venue}</span>
                            </div>}
                        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                            <span className="text-white">Entry</span>
                            <span className="ml-auto text-white">{workshop.type}</span>
                        </div>
                        <div className="flex ">
                            <span className="title-font font-medium text-base md:text-lg lg:text-xl text-white ">{workshop.fee[0] != "Free" ? "₹" + workshop.fee[0] : "Free"}</span>
                            {!workshop.pid && workshop.rlink && <a href={workshop.rlink} className="bg-gradient-to-r from-[#fb5131] via-[#f43253] to-[#e02170] flex ml-auto text-white border-0 py-2 px-6 focus:outline-none rounded">Register</a>}
                            {workshop.pid && <div className="flex ml-auto border-0   focus:outline-none rounded">
                                <ViewAllButton id={workshop.pid} />
                            </div>}
                        </div>
                    </div>
                }
            </div>
        </section>

        <Footer />

    </>
    )
}

export default ComboPost