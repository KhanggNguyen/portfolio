import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { Link } from "react-scroll";
import Toggle from "./Toggle";

export const Navbar = () => {
    const [active, setActive] = useState("");
    
    const handleSetActive = (to) => {
        if(to === "about"){
            setActive("about");
        }else if(to === "projects"){
            setActive("projects");
        }else if(to === "skills"){
            setActive("skills");
        }else if(to === "contact"){
            setActive("contact");
        }
        
    }

    return (
        <header className="bg-gray-800 md:sticky top-0 z-50">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        className="cursor-pointer ml-3 text-xl"
                    >
                        Nguyen Huu Khang
                    </Link> 
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        className={`cursor-pointer mr-5 hover:text-white ${active === "about" ? "text-white" : ""}` }
                        onSetActive={handleSetActive}
                    >
                        About
                    </Link>
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-40}
                        className={`cursor-pointer mr-5 hover:text-white ${ active === "projects" ? "text-white" : ""}`}
                        onSetActive={handleSetActive}
                    >
                        Projects
                    </Link>
                    <Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-40}
                        className={`cursor-pointer  mr-5 hover:text-white ${active === "skills" ? "text-white" : ""}`}
                        onSetActive={handleSetActive}
                    >
                        Skills
                    </Link>
                </nav>

                <Toggle />

                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    className={`cursor-pointer inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 ${active === "contact" ? "text-white" : ""}`}
                    onSetActive={handleSetActive}
                >
                    Hire Me
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
                
            </div>
        </header>
    );
};
