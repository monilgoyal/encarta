import React from 'react'
import Marquee from "react-fast-marquee";
import { Sponsor } from '../../data/sponsors'
import Image from 'next/image';

const Gallery = () => {
    return (
        <div className="flex flex-col justify-center align-middle w-full overflow-x-hidden absolute py-20">
            <div className='text-white  text-3xl md:text-4xl lg:text-5xl mx-auto text-center self-center'>
                <h1 className='tracking-[.1em] mr-[-0.1em]  font-[Backsteal-Regular] text-transparent bg-clip-text bg-gradient-to-r from-[#FB5131] via-[#E93E53] to-[#E02170]'>Gallery</h1>
            </div>
            <Marquee

                className='mt-[8vh] lg:mt-[12vh]'
                gradient={false}
                speed={100}
                pauseOnHover={true}
                pauseOnClick={false}
                delay={0}
                play={true}
                direction="left"

            >{
                    Sponsor.map((s) => (
                        <div className="flex justify-center align-middle  bg-transparent mx-6  " key={s.id} >
                            <div className='w-80'>
                                <Image src={s.logo} className="m-1 rounded-xl" width={24} height={16} objectFit='cover' layout='responsive' alt={s.name}></Image>
                                {/* <h3 className=' text-center text-white'>
                                    {s.name}
                                </h3> */}
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

export default Gallery