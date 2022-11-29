import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

export const ViewAllButton = () => {
    return (
        <div className="px-3 py-2 flex flex-row justify-center align-middle space-x-1 text-center  rounded-full border-2 border-gray-300 border-opacity-75 text-white cursor-pointer">
            <div className='self-center text-lg'>
                View All
            </div>
            <div className='self-center rounded-full border-2 border-gray-300  '>
                <BsArrowRightShort className='text-3xl' />
            </div>
        </div>
    )
}
