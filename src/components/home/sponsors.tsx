import React from 'react'
import Marquee from "react-fast-marquee";
import { Sponsor } from '../../data/sponsors'
import Image from 'next/image';

const Sponsors = () => {
    return (
        <div className="flex flex-col justify-center align-middle w-full overflow-x-hidden absolute  py-20">
            <div className='text-white  text-3xl md:text-4xl lg:text-5xl mx-auto text-center self-center'>
                <h1 className='tracking-[.1em] mr-[-0.1em]  font-[Backsteal-Regular] text-transparent bg-clip-text bg-gradient-to-b from-[#FB5131] via-[#E93E53] to-[#E02170]'>SPONSORS</h1>

            </div>
            <Marquee
                className='mt-[5vh]'
                gradient={false}
                speed={100}
                pauseOnHover={true}
                pauseOnClick={true}
                delay={0}
                play={true}
                direction="left"
            >{
                    Sponsor.map((s) => (
                        <div className="flex justify-center align-middle  bg-transparent mx-6 p-2  rounded-md" key={s.name} >
                            <div className='lg:w-72 w-52'>
                                <Image src={"https://images.weserv.nl/?url=" + s.logo + "&w=600&h=400&dpr=2"} className="m-1" width={12} height={12} objectFit='contain' layout='responsive' alt={s.name}></Image>
                                <h3 className=' text-center text-white'>
                                    {s.name}
                                </h3>
                            </div>
                        </div>
                    ))

                }

            </Marquee>
            {/* <Link href="/about/#skills" passHref>
                <div className="mt-[10vh] self-center">
                    <ViewAllButton />
                </div>
            </Link> */}

            {/* <div className='text-center dark:text-white text-indigo-500 self-center mt-24 md:mt-28 '><BsFillArrowRightCircleFill className='text-4xl' /></div> */}
        </div>
    )
}

export default Sponsors