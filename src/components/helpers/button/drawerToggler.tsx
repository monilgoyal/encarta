import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreator } from '../../../state'
import { RootState } from '../../../state/reducers'
import { AiOutlineClose } from 'react-icons/ai'
import { RiMenu4Line } from 'react-icons/ri'

function DrawerToggler() {
    const IsDrawerOpen = useSelector((state: RootState) => state.IsDrawerOpen)
    const dispatch = useDispatch()
    const toggleDrawer = bindActionCreators(actionCreator.drawerToggle, dispatch)
    return (
        <button type="button" className="bg-transparent rounded-md p-2 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 " onClick={toggleDrawer} aria-label="toggle Menu">
            {IsDrawerOpen ? <AiOutlineClose className=' text-2xl text-white' fill='url(#svg-gradient)' /> : <RiMenu4Line className='text-2xl fill-[#E93E53]' fill='url(#svg-gradient)' />}
        </button>
    )
}

export default DrawerToggler