import { useRouter } from 'next/router'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Navbar from '../../components/navbar'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '../../state/reducers'
import { ViewAllButton } from '../../components/helpers/button/viewall'
const ComboPost = () => {
    const router = useRouter()
    const { cid } = router.query
    const events = useSelector((state: RootState) => state.EventData)

    const data = events.Events.COMBOS ? events.Events.COMBOS[cid.toString()] : null
    return (<>
        <Header title="Encarta - Events" header_content="Events in Encarta" />
        <Navbar />
        <section className="text-gray-600 body-font overflow-hidden min-h-[70vh]">
            {!data && <div className='text-white absolute top-[40%] md:top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xl font-bold animate-pulse'>Loading...</div>}
            {
                data && JSON.stringify({}) != JSON.stringify(data) &&
                <div className="container px-5 py-12 md:py-24 mx-auto" key={data.id}>
                    <div className='text-white text-2xl md:text-3xl lg:text-4xl font-[Backsteal-Regular] mx-auto text-center mb-6 md:mb-12'>
                        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#FB5131] via-[#E93E53] to-[#E02170]' >{data.title}</h1>
                    </div>
                    <div className="lg:w-4/5 mx-auto flex flex-wrap-reverse border-2 border-white border-opacity-10 backdrop-blur-[2px] bg-black/60 rounded-xl px-2">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 text-white">
                            <div className='leading-relaxed text-sm md:text-base text-justify px-4' dangerouslySetInnerHTML={{ __html: data.desc }} ></div>
                            <div className="w-full  px-4 mx-auto mt-12">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-black ">


                                    <div className="block w-full overflow-x-auto">
                                        <table className="items-center w-full border-collapse text-blueGray-700   ">
                                            <thead className="thead-light ">
                                                <tr>
                                                    <th className="px-3 bg-blueGray-600 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                        Events
                                                    </th>
                                                    <th className="px-3 bg-blueGray-600 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                        Cost
                                                    </th>
                                                    <th className="px-3 bg-blueGray-600 text-blueGray-700 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">Entry</th>
                                                </tr>
                                            </thead>
                                            <tbody className='text-xs md:text-sm'>
                                                {
                                                    data.Events.map((d, index) => (


                                                        <tr key={index}>
                                                            <th className="border-t-0 px-3 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left">
                                                                {d[0]}
                                                            </th>
                                                            <td className="border-t-0 px-3 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 ">
                                                                {d[1]}
                                                            </td>
                                                            <td className="border-t-0 px-3 align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                                                                {d[2]}
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                                <tr>
                                                    <th className="border-t-0 px-3 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left">
                                                        Total
                                                    </th>
                                                    <td className="border-t-0 px-3 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 ">
                                                        <del>
                                                            {data.originalPrice}
                                                        </del> {data.comboPrice[0]}
                                                    </td>
                                                    <td className="border-t-0 px-3 align-middle border-l-0 border-r-0 whitespace-nowrap p-4">


                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                                        <div className="flex ">
                                            <span className="title-font font-medium text-base md:text-lg lg:text-xl text-white ">₹{data.comboPrice[0]}</span>
                                            {data.pid && <div className="flex ml-auto border-0   focus:outline-none rounded">
                                                <ViewAllButton id={data.pid} />
                                            </div>}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="lg:w-1/2 w-full text-white py-4 lg:py-10 ">
                            <Image className=' rounded-xl' src={data.thumbUrl} width={600} height={400} objectFit="contain" layout='responsive' alt='combo'></Image>
                        </div>
                    </div>
                </div>
            }
        </section>
        <Footer />

    </>
    )
}

export default ComboPost