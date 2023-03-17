import React, { useState } from "react";
import { Link } from "react-scroll";
import Toggle from "./Toggle";
import Lang from "./Lang";
import "../styles/navbar.css";
import { useTranslation } from "react-i18next";
import { FaRegEnvelope } from "react-icons/fa";

export const Navbar = () => {
    const { t } = useTranslation();
    const [active, setActive] = useState("");

    const handleSetActive = (to) => {
        if (to === "about") {
            setActive("about");
        } else if (to === "experiences") {
            setActive("experiences");
        } else if (to === "projects") {
            setActive("projects");
        } else if (to === "skills") {
            setActive("skills");
        } else if (to === "contact") {
            setActive("contact");
        }
    };

    return (
        <header className="bg-slate-100 dark:bg-gray-800 md:sticky top-0 z-50">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-gray-800 dark:text-gray-400">
                <div className="title-font font-medium mb-4 md:mb-0">
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
                <div class="block h-10 lg:hidden sm:my-10">
                    <button
                        onClick={() => {
                            let menu = document.getElementById("menu");
                            menu.classList.toggle("hidden");
                        }}
                        className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                    >
                        <svg
                            className="fill-current h-3 w-3 cursor-pointer block"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <nav
                    className="flex flex-wrap items-center text-base justify-between
                                md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700"
                >
                    <div
                        className="hidden w-full block flex-grow 
                        md:justify-between md:pt-0  
                        lg:flex lg:items-center lg:w-auto lg:space-x-4 "
                        id="menu"
                    >
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            className={`block cursor-pointer font-mono hover:text-emerald-200 dark:hover:text-white py-2 ${
                                active === "about"
                                    ? "text-emerald-700 dark:text-white"
                                    : ""
                            }`}
                            onSetActive={handleSetActive}
                        >
                            {t("common.about")}
                        </Link>

                        <Link
                            activeClass="active"
                            to="experiences"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            className={`block cursor-pointer font-mono hover:text-emerald-200 dark:hover:text-white py-2 ${
                                active === "experiences"
                                    ? "text-emerald-700 dark:text-white"
                                    : ""
                            }`}
                            onSetActive={handleSetActive}
                        >
                            {t("common.experiences")}
                        </Link>

                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            className={`block cursor-pointer font-mono hover:text-emerald-200 dark:hover:text-white py-2 ${
                                active === "projects"
                                    ? "text-emerald-700 dark:text-white"
                                    : ""
                            }`}
                            onSetActive={handleSetActive}
                        >
                            {t("common.projects")}
                        </Link>

                        <Link
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            className={`block cursor-pointer font-mono hover:text-emerald-200 dark:hover:text-white py-2 ${
                                active === "skills"
                                    ? "text-emerald-700 dark:text-white"
                                    : ""
                            }`}
                            onSetActive={handleSetActive}
                        >
                            {t("common.skills")}
                        </Link>
                    </div>
                </nav>

                <Lang />

                <Toggle />

                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    className={`flex items-center justify-center w-12 h-12 cursor-pointer rounded-3xl border bg-slate-100  font-mono text-gray-400
                    hover:text-emerald-200
                    dark:bg-gray-800 dark:hover:text-white  ${
                        active === "contact"
                            ? "text-emerald-700 dark:text-white"
                            : ""
                    }`}
                    onSetActive={handleSetActive}
                >
                    <FaRegEnvelope />
                </Link>
            </div>
        </header>
    );
};
