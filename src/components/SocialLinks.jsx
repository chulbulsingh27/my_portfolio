import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <div className="text-black font-medium">LinkedIn</div> <FaLinkedin size={30}  className="text-blue-800"/>
        </>
      ),
      href: "https://www.linkedin.com/in/chulbul-singh-2989ba196/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <div className="text-black font-medium">GitHub</div> <FaGithub size={30} className="text-black"/>
        </>
      ),
      href: "https://github.com/chulbulsingh27",
    },
    {
      id: 3,
      child: (
        < >
          <div className="text-black font-medium">Mail</div> <HiOutlineMail size={30} className="text-red-800 "/>
        </>
      ),
      href: "mailto:cs845418@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <div className="text-black font-medium">Resume </div><BsFillPersonLinesFill size={30}/>
        </>
      ),
      href: "https://drive.google.com/file/d/1CpgqShFHAvqclD2SH5a4Z05ws2BdRSpJ/view?usp=sharing",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-[#b134eb]" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;