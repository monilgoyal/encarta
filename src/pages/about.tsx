import React from 'react'
import Image from 'next/image'
import Footer from '../components/footer'
import Header from '../components/header'
import Navbar from '../components/navbar'
// import { Social_SVG } from '../components/helpers/social'
// import Slider from '../components/slider/Slider'


function About() {
    return (
        <>
            <Header title="About Encarta" header_content="About Encarta" />
            <Navbar />
            <div className='text-white text-3xl md:text-4xl lg:text-5xl font-[Backsteal-Regular] mx-auto text-center md:mb-8'>
                <h1 className='text-transparent bg-clip-text bg-gradient-to-b from-[#FB5131] via-[#e93e53] to-[#E02170]' >About Encarta</h1>
            </div>
            <div className="container px-5 py-6 mx-auto flex flex-col text-white">
                <div className="lg:w-4/6 mx-auto items-center text-center sm:text-justify justify-center">
                    <p className="leading-relaxed text-lg mb-4 " >
                        The Department of Computer Science and Engineering, MBM University, is elated to announce its 23rd annual techfest from December 23–25, following its legacy since 1997. It incorporates both technical and non-technical events, which include coding relay, robotics, electronics, workshops, development events, and much more. Encarta is all set to provide an enriching experience to their witnesses. A wide range of events will be organized in both technical and non-technical fields to broaden students&apos;` knowledge in their chosen fields. It will prove to be a pivotal opportunity for youngsters striving for excellence in their career domain.
                    </p>
                </div>
            </div>
            {/* <div className="lg:w-full   mx-auto sm:pr-8 sm:py-8 text-white">

                <div className="flex flex-col items-center text-justify justify-center">
                </div>
            </div> */}

            <section className="text-white body-font">
                <div className="container px-5 py-6 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8 flex flex-col justify-center align-middle items-center self-center">
                                <div className='w-28 h-28 rounded-full mx-auto border border-transparent dark:border-indigo-600 p-1'>
                                    <Image className='rounded-full inline-block ' src='https://cdn.dorik.com/6170fc2c54b34900117ea7a5/632a2aa24a33d3001191b969/images/27-1_rfl1dpqh.jpg' width={240} height={240} objectFit='cover' layout='responsive' alt='monil goyal' priority={true}></Image>
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="mt-4 title-font  text-white text-transparent bg-clip-text bg-gradient-to-b from-[#FB5131] to-[#E02170]  mb-1 cursor-pointer font-[Andika-Regular] text-xl font-semibold">N.C. BARWAR</h2>
                                    {/* <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div> */}
                                    <p className="text-base">HOD, DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-justify">

                                <p className="leading-relaxed text-lg mb-4">With great pleasure, I welcome you to the Department of Computer Science and Faculty of
                                    Engineering and Architecture, MBM UNIVERSITY. The vision of our department is
                                    “To be a leader in providing excellent educational, research and techno-entrepreneurial
                                    resources in the field of Computer Science and Engineering to meet out the existing, future
                                    and inter-disciplinary needs of industry and society.” Our department
                                    works to deliver high-quality education using cutting-edge teaching-learning techniques.

                                </p>
                                <p className='leading-relaxed text-lg mb-4'>Our department is elated to announce that our very famed annual fest ENCARTA is being
                                    premiered with its 23rd version. This fest is the annual technical festival of our department,
                                    Started in 1997 with the aim of providing a platform to the student community to develop
                                    and showcase their domain-related prowess with a footfall of 3500 in its latest edition. This
                                    festival has been totally put together by students.
                                </p>
                                <p className='leading-relaxed text-lg mb-4'>Attaining knowledge is a life-long process and is extremely significant for one&apos;s overall
                                    development. &quot;Children must be taught how to think, not what to think&quot;, is the quote
                                    I&apos;d like to use to wrap up my message.
                                </p>
                                <p className='leading-relaxed text-lg mb-4'>Looking forward towards your proactive involvement and i wish a great success of ENCARTA 22.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-white body-font">
                <div className="container px-5 py-6 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8 flex flex-col justify-center align-middle items-center self-center">
                                <div className='w-28 h-28 rounded-full mx-auto border border-transparent dark:border-indigo-600 p-1'>
                                    <Image className='rounded-full inline-block ' src='https://cdn.dorik.com/6170fc2c54b34900117ea7a5/632a2aa24a33d3001191b969/images/299879726_1227725241360586_7954635754734882989_n_ylecrpzh.jpg' width={240} height={240} objectFit='cover' layout='responsive' alt='monil goyal' priority={true}></Image>
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="mt-4 title-font  text-white text-transparent bg-clip-text bg-gradient-to-b from-[#FB5131] to-[#E02170]  mb-1 cursor-pointer font-[Andika-Regular] text-xl font-semibold">ABHISEK GOUR</h2>
                                    {/* <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div> */}
                                    <p className="text-base">ENCARTA FACULTY CO-ORDINATOR</p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-justify">
                                {/* <p className="">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p> */}
                                <p className="leading-relaxed text-lg mb-4">MBM University, an epitome of academic, socio-culture and moral values is constantly
                                    influencing and shaping the lives of youth. The University believes in imparting quality
                                    education to all its students. Development of an individual in their respective domain and
                                    meeting the intellectual and emotional standards of industry is what we strive for.
                                </p>
                                <p className='leading-relaxed text-lg mb-4'>
                                    I, being the faculty coordinator would like to announce that ENCARTA, the much
                                    anticipated fest of our esteemed University, is being organized by the Computer Science
                                    Department, joyously celebrating its 23rd anniversary this year. The festival, which will
                                    feature both technical and non-technical events, will prove to be a pivotal opportunity for
                                    the youngsters striving for excellence in their career domain.
                                    I am also grateful to have this opportunity at hand and use this platform to thank our
                                    respected parents/guardian of our students, for bestowing their faith and confidence in us.
                                    Your keen, reliable faithis our driving forces.
                                    I would like to close with the words of Albert Einstein – “Imagination is more important
                                    than knowledge, for while knowledge defines all that we currently know and
                                    understand, imagination points to all we might yet discover and create.”

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Slider></Slider> */}
            <Footer />
        </>
    )
}

export default About