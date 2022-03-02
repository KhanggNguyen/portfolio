import React, {useRef} from "react";
import {Link} from "react-scroll"
export const About = () => {

    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center min-h-screen">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hello, my name is Khang
                        <br className="hidden lg:inline-block" />
                        I'm an IT developper
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    </p>
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
