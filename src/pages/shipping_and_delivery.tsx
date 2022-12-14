import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Navbar from '../components/navbar'

function Shipping_and_Delivery_Policy() {

    return (
        <>
            <Header title="Encarta" header_content="Encarta" />
            <Navbar />
            <section className=" py-20 lg:py-24  min-h-[50vh] md:min-h-[70vh] ">

                <div className='text-white text-xl md:text-2xl lg:text-3xl font-[Backsteal-Regular] mx-auto text-center md:mb-12'>
                    <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#FB5131] via-[#E93E53] to-[#E02170]' >Cancellation and Refund Policy</h1>
                </div>

                <section id='education' className="text-white body-font mx-auto  mb-4 py-4 px-5 md:px-15 lg:px-20 pt-10 lg:pt-12 text-lg lg:text-xl" >
                    <div className='container mx-auto  leading-9'>
                        <ol className="list-disc list-inside">
                            <li >
                                Shipping is not applicable.
                            </li>
                        </ol>
                    </div>
                </section >
            </section>
            <Footer />
        </>
    )
}

export default Shipping_and_Delivery_Policy