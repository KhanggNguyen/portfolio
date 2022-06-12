import React from "react";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import '../styles/about.css';

export const About = () => {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center min-h-screen">
                <div className="lg:w-1/2 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <span className="text-2xl text-green-400">
                        Hi there,
                    </span>
                    <h1 className="title title-font sm:text-4xl text-3xl mb-4 font-medium dark:text-white">
                        I am a Fullstack Developer
                    </h1>
                    <span className="mb-4 dark:text-gray-500">I'm currently working as a Fullstack Developer. I have experiences working with differents frameworks and languages.</span>
                    <div className="mb-8 flex space-x-4 dark:text-gray-100">
                        <a
                            href="https://www.linkedin.com/in/huu-khang-nguyen-216355161/"
                            target="_blank"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/KhanggNguyen"
                            target="_blank"
                        >
                            <FaGithub />
                        </a>
                    </div>
                    <div className="flex justify-center">
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            className={`cursor-pointer inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg`}
                        >
                            Work With Me
                        </Link>
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-40}
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white cursor-pointer  rounded text-lg"
                        >
                            See My Past Work
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    {/* <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./coding-in-hoodie.svg"
                    /> */}
                </div>
            </div>
        </section>
    );
};
