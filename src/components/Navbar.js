import React, { useState } from "react";
import { Link } from "react-scroll";
import Toggle from "./Toggle";
import Lang from "./Lang";
import '../styles/navbar.css';
import { useTranslation } from "react-i18next";

export const Navbar = () => {
    const { t } = useTranslation();
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
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-gray-400">
                <div className="title-font font-medium text-white mb-4 md:mb-0">
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        className="cursor-pointer ml-3 text-xl font-sans"
                    >
                        Nguyen Huu Khang
                    </Link> 
                </div>
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
                        {t('common.about')}
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
                        {t('common.experiences')}
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
                        {t('common.projects')}
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
                        {t('common.skills')}
                    </Link>
                </nav>

                <Lang />

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
                    {t('common.contact')}
                </Link>
                
            </div>
        </header>
    );
};
