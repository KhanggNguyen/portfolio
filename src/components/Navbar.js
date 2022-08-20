import React, { useState } from "react";
import { Link } from "react-scroll";
import Toggle from "./Toggle";
import '../styles/navbar.css';

export const Navbar = () => {
    const [active, setActive] = useState("");
    
    const handleSetActive = (to) => {
        if(to === "about"){
            setActive("about");
        }else if(to === "experiences"){
            setActive("experiences");
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
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center dark:text-gray-400">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        className="cursor-pointer ml-3 text-xl font-sans"
                    >
                        Nguyen Huu Khang
                    </Link> 
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap space-x-4 items-center text-base justify-center">
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        className={`cursor-pointer font-mono hover:text-white ${active === "about" ? "text-white" : ""}` }
                        onSetActive={handleSetActive}
                    >
                        About
                    </Link>
                    <Link
                        activeClass="active"
                        to="experiences"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        className={`cursor-pointer font-mono hover:text-white ${active === "experiences" ? "text-white" : ""}` }
                        onSetActive={handleSetActive}
                    >
                        Experiences
                    </Link>
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        className={`cursor-pointer font-mono hover:text-white ${ active === "projects" ? "text-white" : ""}`}
                        onSetActive={handleSetActive}
                    >
                        Projects
                    </Link>
                    <Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        className={`cursor-pointer font-mono hover:text-white ${active === "skills" ? "text-white" : ""}`}
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
                    offset={-100}
                    className={`gradient-border font-mono  ${active === "contact" ? "text-white" : ""}`}
                    onSetActive={handleSetActive}
                >
                    Hire Me
                </Link>
                
            </div>
        </header>
    );
};
