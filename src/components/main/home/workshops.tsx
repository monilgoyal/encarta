import React from 'react'
import { CgBrowser } from 'react-icons/cg'
import { BiCode } from 'react-icons/bi'
import { VscDebugAlt } from 'react-icons/vsc'
import { IoRocketOutline } from 'react-icons/io5'
import { BiCheck } from 'react-icons/bi'
import { SiServerless } from 'react-icons/si'


const WorkshopsIcon = (props) => {
    return (
        <div className="p-4 lg:w-1/3 w-1/2  flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full dark:bg-gray-800 bg-indigo-500 text-white mb-5 flex-shrink-0">
                {props.children}
            </div>
            <div className="flex-grow">
                <h2 className="dark:text-white text-gray-500 text-lg title-font font-medium mb-3">{props.title}</h2>
            </div>
        </div>
    )
}


const Workshops = () => {
    return (
        <section className="text-gray-400 body-font bg-transparent">
            <div className="container px-5 py-24 mx-auto">
                <div className='text-white  text-3xl md:text-4xl lg:text-5xl font-semibold mx-auto text-center'>
                    <h1>Workshops</h1>
                </div>
                <div className="mb-6 lg:mb-0 max-w-xs text-gray-800 text-center ">
                    <div className="bg-white block rounded-lg shadow-lg">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover">
                            <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" className="w-full rounded-t-lg" />
                            <a href="#!">
                                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                            </a>
                            <svg className="absolute left-0 bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path fill="#fff"
                                    d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                                </path>
                            </svg>
                        </div>
                        <div className="p-6">
                            <h5 className="text-lg font-bold mb-4">Darren Randolph</h5>
                            <p className="text-gray-500 mb-4">Marketing expert</p>
                            <ul className="list-inside flex mx-auto justify-center">
                                <a href="#!" className="px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 text-blue-600">
                                        <path fill="currentColor"
                                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                    </svg>
                                </a>
                                <a href="#!" className="px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                                        <path fill="currentColor"
                                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                    </svg>
                                </a>
                                <a href="#!" className="px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                                        <path fill="currentColor"
                                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                    </svg>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Workshops