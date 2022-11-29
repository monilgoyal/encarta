// import Image from 'next/image'
// import Link from 'next/link'
// import { useDispatch } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { actionCreator } from '../../../state'


function Hero() {
    // const dispatch = useDispatch()
    const scrolldown = () => {
        document.querySelector('.main-screen').scrollBy({
            top: 500,
            behavior: 'smooth'
        })
        return false;
    }
    // const toggleContactForm = bindActionCreators(actionCreator.contactFormToggle, dispatch)
    return (
        <section className="relative text-gray-400 bg-transparent body-font -z-0 ">
            <div className=" container mx-auto flex flex-col lg:px-12 xl:px-36 h-[65vh] lg:py-24 items-center  self-center align-middle justify-around">
                <div className='w-full flex flex-col justify-center mx-auto  '>
                    <div>

                        <h1 className='text-4xl md:text-8xl  text-white text-center tracking-[.4em] animate-text1_bt  mr-[-0.4em] mb-[-0.2em] font-[Backsteal-Regular] text-transparent bg-clip-text bg-gradient-to-b from-[#FB5131] via-[#E93E53] to-[#E02170] ' >Encarta</h1>
                        <h2 className='text-sm md:text-2xl md:tracking-[1.2rem] tracking-[.3rem]  text-white text-center   font-extralight  animate-text2_bt mb-5  md:mb-0 font-[Eirian] ' >THE ANNUAL TECHNICAL FEST</h2>
                    </div>
                    {/* <div className="mx-auto mt-4 animate-text3_bt">

                        <span className='mx-auto lg:mx-0 w-min text-center'>
                            <p className="w-max font-light relative whitespace-nowrap overflow-x-hidden leading-relaxed mx-auto lg:mx-0  before:bg-white dark:before:bg-gray-900 after:bg-gray-900 dark:after:bg-white pr-1 border-r-4 dark:border-white border-gray-700 border-solid text-xl xl:text-2xl animate-typeWriter">
                                <span data-text-1="INSPIRATION" data-text-2="INNOVATION" data-text-3="INVENTION" className='font-extrabold text-white before:content-["Full Stack Developer"] before:animate-changeText  text-transparent bg-clip-text bg-gradient-to-b from-[#FB5131] to-[#E02170] text-xl md:text-2xl  '></span>
                            </p>
                        </span>
                    </div>
                    <h2 className='text-xl md:text-2xl  text-white text-center   font-extralight mt-4 animate-text2_bt mb-5  md:mb-0' >23 Dec to 25 Dec 2k22</h2>
                    <div className="animate-text3_bt">
                        <h2 className='text-xl md:text-2xl  animate-pulse text-white text-center   font-extralight mt-4 animate-text2_bt mb-5  md:mb-0' >Registration Starting Soon...</h2>
                    </div> */}
                    {/* <p className='text-xl md:text-2xl  text-white text-center font-extralight mt-4 animate-text3_bt' >23 Dec to 25 Dec 2k22</p> */}
                </div>
                <div className='text-center absolute top-[60vh]' >
                    <button className="" onClick={scrolldown}>
                        <svg className="arrows ">
                            <path stroke="#FB5131" className="a1" d="M0 0 L30 32 L60 0"></path>
                            <path stroke="#E93E53" className="a2" d="M0 20 L30 52 L60 20"></path>
                            <path stroke="#E02170" className="a3" d="M0 40 L30 72 L60 40"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero