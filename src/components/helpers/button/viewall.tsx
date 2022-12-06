import React, { useRef } from 'react'
// import { BsArrowRightShort } from 'react-icons/bs'
import { useScript } from '../../../hooks/useScript';
export const ViewAllButton = ({ id }) => {
    const ref = useRef<HTMLFormElement>(null);
    useScript(
        "https://checkout.razorpay.com/v1/payment-button.js",
        ref,
        id
    );
    return (
        // <div className="px-3 py-2 flex flex-row justify-center align-middle space-x-1 text-center  rounded-full border-2 border-gray-300 border-opacity-75 text-white cursor-pointer hover:bg-gradient-to-b hover:from-[#FB5131] hover:via-[#E93E53] hover:to-[#E02170] hover:scale-110 delay-150 duration-300">
        //     <div className='self-center text-lg'>
        //         View All
        //     </div>
        //     <div className='self-center rounded-full border-2 border-gray-300  '>
        //         <BsArrowRightShort className='text-3xl' />
        //     </div>
        // </div>
        // <form className="paymentForm"></form>
        <form className='paymentForm z-50' ref={ref} ></form>

    )
}

{/* <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_KoNITmag3C8jk5" async> </script> </form> */ }
