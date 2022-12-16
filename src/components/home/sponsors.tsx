import React from 'react'
import Image from 'next/image'

const Sponsors = () => {

    return (
        <section className="text-white body-font bg-transparent">
            <div className="container px-5 py-12 mx-auto">
                <div className='text-white  text-3xl md:text-4xl lg:text-5xl font-semibold mx-auto text-center '>
                    <h1 className='tracking-[.1em] mr-[-0.1em]  font-[Backsteal-Regular] text-transparent bg-clip-text bg-gradient-to-r from-[#FB5131] via-[#E93E53] to-[#E02170] sm:py-4 '>Our Sponsors</h1>
                </div>
                <div className="container px-5 pt-6  mx-auto flex items-center  flex-col">
                    <div className='w-36 h-36'>
                        <Image className=' inline-block ' src='https://cdn.dorik.com/6170fc2c54b34900117ea7a5/632a2aa24a33d3001191b969/images/IMG_20221213_031124-removebg-preview_ivmxpuus.png' width={240} height={240} objectFit='cover' layout='responsive' alt='bolde - Title Sponsor' priority={true}></Image>
                    </div>
                    <div className="flex flex-col mb-6  pr-0 w-full  text-center">
                        <h2 className="text-xs text-white tracking-widest font-medium title-font mb-1">As Our</h2>
                        <h1 className="md:text-3xl text-2xl font-medium title-font text-white ">Title Sponsor</h1>
                    </div>

                </div>
                <div className='flex flex-row '>
                    <div className='w-1/2 items-center'>
                        <div className='w-32 md:w-36 h-32 md:h-36 mx-auto'>
                            <Image className=' inline-block ' src='https://cdn.dorik.com/6170fc2c54b34900117ea7a5/632a2aa24a33d3001191b969/images/Screenshot_2022-12-13_034815-removebg-preview_84pv0k1v.png' width={240} height={240} objectFit='contain' layout='responsive' alt='bolde - Title Sponsor' priority={true}></Image>
                        </div>
                        <div className="flex flex-col mb-6  pr-0 w-full  text-center">
                            <h2 className="text-xs text-white tracking-widest font-medium title-font mb-1">As Our</h2>
                            <h1 className="md:text-xl text-lg font-medium title-font text-white">Media Partner</h1>
                        </div>

                    </div>
                    {/* <div className='w-1/2 items-center'>
                        <div className='w-32 md:w-36 h-32 md:h-36 mx-auto'>
                            <Image className=' inline-block ' src='https://cdn.dorik.com/6170fc2c54b34900117ea7a5/632a2aa24a33d3001191b969/images/Screenshot_2022-12-15_193632-removebg-preview_c1z6d4uj.png' width={240} height={240} objectFit='contain' layout='responsive' alt='bolde - Title Sponsor' priority={true}></Image>
                        </div>
                        <div className="flex flex-col mb-6  pr-0 w-full  text-center">
                            <h2 className="text-xs text-white tracking-widest font-medium title-font mb-1">As Our</h2>
                            <h1 className="md:text-xl text-lg font-medium title-font text-white">Event Partner</h1>
                        </div>

                    </div> */}
                    <div className='w-1/2 items-center'>
                        <div className='w-32 md:w-36 h-32 md:h-36 mx-auto'>
                            <Image className=' inline-block ' src='https://cdn.dorik.com/6170fc2c54b34900117ea7a5/632a2aa24a33d3001191b969/images/BROTHERS_FOOD_LOGO_page-0001-removebg-preview-4_gk5wn714.png' width={240} height={240} objectFit='contain' layout='responsive' alt='bolde - Title Sponsor' priority={true}></Image>
                        </div>
                        <div className="flex flex-col mb-6  pr-0 w-full  text-center">
                            <h2 className="text-xs text-white tracking-widest font-medium title-font mb-1">As Our</h2>
                            <h1 className="md:text-xl text-lg font-medium title-font text-white">Food Partner</h1>
                        </div>

                    </div>

                </div>
                <div className='flex justify-center space-x-4 mt-4'>
                    <div className='w-24 md:w-28 h-24 md:h-36  '>
                        <Image className=' inline-block ' src='https://cdn.dorik.com/6170fc2c54b34900117ea7a5/632a2aa24a33d3001191b969/images/WhatsApp-Image-2022-12-11-at-10.35.31-PM-1_atdjzxwq.jpeg' width={240} height={240} objectFit='contain' layout='responsive' alt='bolde - Title Sponsor' priority={true}></Image>
                    </div>
                    <div className="flex flex-col max-w-[190px] flex-shrink-0 space-y-4 ">
                        <div className='text-xs md:text-base'>Download Bolde App and Review on play store</div>
                        <a href='https://play.google.com/store/apps/details?id=com.bolde' className="bg-transparent border-white border inline-flex py-[10px] px-5 rounded-lg items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                            </svg>
                            <span className="ml-2 flex items-start flex-col leading-none">
                                {/* <span className="text-xs text-gray-600 mb-1">GET IT ON</span> */}
                                <span className="title-font font-medium whitespace-nowrap">Google Play</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div >
        </section >


    )
}

export default Sponsors