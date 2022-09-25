import React from "react";
import { projects } from "../data";
import { CodeIcon } from "@heroicons/react/solid";
import { useTranslation } from "react-i18next";

export const Projects = () => {
    const { t } = useTranslation();

    return (
        <section id="projects" className="dark:text-gray-400 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40  min-h-screen">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 dark:text-white">
                        {t("projects.title")}
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        {t("projects.subtitle")}
                    </p>
                </div>
                <div className="flex flex-wrap m-4">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}
                            className="sm:w-1/2 w-full h-full p-4"
                            target="_blank"
                        >
                            <div className="flex relative h-80 sm:h-fit">
                                {/* <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={project.image}
                                /> */}
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 opacity-100  hover:border-gray-900 dark:hover:border-white">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium dark:text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
