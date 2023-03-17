import React from "react";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/about.css";
import { useTranslation } from "react-i18next";

export const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about">
            <div className="container mx-auto flex min-h-screen flex-col items-center px-10 py-20 md:flex-row">
                <div className="mb-16 flex w-2/3 flex-col items-center text-center md:mb-0 md:w-full  md:items-start md:pr-16 md:text-left lg:pr-24">
                    <span className="text-2xl text-green-400">
                        {t("about.hi-there")},
                    </span>
                    <h1 className="title title-font mb-4 text-3xl font-medium dark:text-white sm:text-4xl">
                        {t("about.I-am-a-Fullstack-Developer")}
                    </h1>
                    <span className="mb-4 dark:text-gray-500 sm:h-36 lg:h-20">
                        {t("about.intro")}
                    </span>
                    <div className="mb-8 flex space-x-4 dark:text-gray-100">
                        <a
                            href="https://www.linkedin.com/in/huu-khang-nguyen-216355161/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/KhanggNguyen"
                            target="_blank"
                            rel="noopener noreferrer"
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
                            offset={-100}
                            className={`focus:outline-none inline-flex cursor-pointer rounded-3xl rounded border-0 bg-green-500 py-2 px-6 text-lg text-white hover:bg-green-600`}
                        >
                            {t("about.work-with-me")}
                        </Link>
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            className="focus:outline-none ml-4 inline-flex cursor-pointer rounded-3xl rounded border-0 bg-gray-800 py-2 px-6 text-lg text-gray-400  hover:bg-gray-700 hover:text-white"
                        >
                            {t("about.see-my-past-work")}
                        </Link>
                    </div>
                </div>
                <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
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
