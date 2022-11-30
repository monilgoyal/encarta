import React from 'react'
import Image from 'next/image'
import Footer from '../components/footer'
import Header from '../components/header'
import Navbar from '../components/navbar'
import { Social_SVG } from '../components/helpers/social'

function About() {
    return (
        <>
            <Header title="Encarta - Schedule" header_content="About - Monil Goyal" />
            <Navbar />
            <div className='text-white text-3xl md:text-4xl lg:text-5xl font-[Backsteal-Regular] mx-auto text-center md:mb-12'>
                <h1 className='text-transparent bg-clip-text bg-gradient-to-b from-[#FB5131] via-[#E93E53] to-[#E02170]' >About Encarta</h1>
            </div>
            <section className="text-white  body-font mb-4 py-4">
                <div className="flex flex-col lg:flex-row sm:w-5/6 xl:w-4/5 lg:w-5/6 mx-auto ">
                    <div className="lg:w-1/2 text-center sm:pr-8 sm:py-8">
                        <div className='w-28 h-28 rounded-full mx-auto p-1'>
                            <Image className='rounded-full inline-block ' src='/logo.png' width={240} height={240} objectFit='cover' layout='responsive' alt='monil goyal' priority={true}></Image>
                        </div>
                        <div className="flex flex-col items-center text-center justify-center">
                            <h2 className="font-medium title-font mt-4 text-white text-lg whitespace-nowrap">Encarta - The Annual Tech Fest</h2>
                            <div className="w-12 h-1 bg-gradient-to-b from-[#FB5131] via-[#E93E53] to-[#E02170] rounded mt-2 mb-4"></div>
                            <p className="text-base">I am a full stack web developer, building and developing modern websites with latest technologies. Expertise in API development and integration, working on Linux and Windows environment.
                                Competent to develop scalable and user friendly websites. Helping businesses to develop and deploy APIs for production. I am having good understanding of development, testing and production environments.</p>
                        </div>
                    </div>
                    <div className="mt-4 justify-center align-middle flex flex-col sm:mx-auto sm:mt-0 pt-4 xs:w-full sm:w-2/3 lg:w-1/2 sm:pl-8 sm:py-8 lg:border-l-[4px] border-indigo-100 dark:border-gray-800 sm:border-t-0 border-t ">
                        {/* <div className="mt-4 pt-4 sm:w-1/2 sm:pl-8 sm:py-8 sm:mt-0 sm:border-l-[4px] border-indigo-100 dark:border-gray-800 sm:border-t-0 border-t "> */}
                        <div className="w-full px-6">
                            <Social_SVG />
                        </div>
                    </div>
                </div >
            </section >
            <Footer />
        </>
    )
}

export default About