import React from 'react'
import my_image from "../assets/heroImage.png"
import { FaAngleRight} from 'react-icons/fa'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full '>
                    <h4 className='text-md sm:text-lg text-white'>Hello, I’m</h4>
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">Chulbul Singh</h2>
                    <h3 className='text-xl sm:text-2xl text-white'>CREATIVE FRONT-END WEB DEVELOPER</h3>
                    <p className='text-gray-300 py-4 max-w-md'>I'm more front end focused and love to work with Reactjs as well as pure HTML, CSS.</p>
                    <div>
                        <Link
                        to='portfolio' smooth duration={500}
                         className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#903c96] to-[#5f3775] cursor-pointer'>
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <FaAngleRight size={25} className="ml-1"/>
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img
                        src={my_image} 
                        className="rounded-2xl mx-10  w-3/4 h-[200px] md:w-full "
                        alt="my profile "
                    />
                </div>
            </div>

        </div>
    )
}

export default Home