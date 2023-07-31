import React from 'react'

const Contact = () => {
    return (
        <div
            name="contact"
            className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
        >
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Contact
                    </p>
                    <p className='py-4 my-4 text-lg'>Dropping a line to say g’day, ask for my resume or see if we can build something amazing together? I’d love to hear from you!</p>
                    <p className="my-2">Fill in your info in the form below and I look forward to hearing from you!
                    </p>
                </div>

                <div className=" flex justify-center items-center">
                    <form
                        action="https://getform.io/f/99367a95-e91d-4352-afd8-4bf24977b732"
                        method="POST"
                        className=" flex flex-col w-full md:w-1/2"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <textarea
                            name="message"
                            placeholder="Hey there!"
                            rows="10"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        ></textarea>

                        <button className="text-white bg-gradient-to-b from-[#903c96] to-[#5f3775] px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                            Let's talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact