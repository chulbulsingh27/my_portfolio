import React from 'react'
import html from '../assets/html.png';
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import git from "../assets/git.png";
import sql from "../assets/sql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600",
        },
        {
            id: 5,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
        },
        {
            id: 6,
            src: git,
            title: "git",
            style: "shadow-white",
        },
        {
            id: 7,
            src: github,
            title: "gitHub",
            style: "shadow-pink-400",
        },
        {
            id: 8,
            src: sql,
            title: "SQL",
            style: "shadow-gray-400",
        },
    ];
    return (
        <div
            name="experience"
            className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div >
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline py-6 ">
                        Experience
                    </p>
                    {/* <p className='text-white py-6'>Frontend Developer Intern</p>
                    <p className='text-white text-2xl font-bold'>AWIGN Enterprises <span className='text-xl font-medium m-6'>Dec 2022-May 2023</span></p>
                    <p className='text-white py-4'>Created around 20 Modal components using HTML Tailwind CSS and React js that open on top of the page content for
                        extra details, notifications to the user, or any other new content.</p>
                    <p className='text-white'>Worked on the Awign UI Form Enhancement project and changed the whole UI of the Awign business platform. Also
                        made changes to the other platforms of Awign like the office platform and fulfillment platform.</p> */}
                    {/* <p className='text-white py-4'>Developed clean and maintainable code for the Awign office platform</p> */}
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Experience