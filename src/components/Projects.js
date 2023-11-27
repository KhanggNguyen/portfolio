import React from "react";
import { projects } from "../data";
import { CodeIcon } from "@heroicons/react/solid";
import { useTranslation } from "react-i18next";

export const Projects = () => {
    const { t } = useTranslation();

    return (
        <section id="projects" className="body-font dark:text-gray-400">
            <div className="container mx-auto min-h-screen px-5 py-10 text-center  lg:px-40">
                <div className="mb-20 flex w-full flex-col">
                    <CodeIcon className="mx-auto mb-4 inline-block w-10" />
                    <h1 className="title-font mb-4 text-3xl font-medium dark:text-white sm:text-4xl">
                        {t("projects.title")}
                    </h1>
                    <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                        {t("projects.subtitle")}
                    </p>
                </div>
                <div className="m-4 flex flex-wrap">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}
                            className="h-full w-full p-4 sm:w-1/2"
                            target="_blank"
                        >
                            <div className="sm:h-fit relative flex h-80">
                                {/* <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={project.image}
                                /> */}
                                <div className="relative z-10 w-full border-4 border-gray-400 px-8 py-10 opacity-100  hover:border-gray-900 dark:hover:border-white">
                                    <h2 className="title-font mb-1 text-sm font-medium tracking-widest text-green-400">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font mb-3 text-lg font-medium dark:text-white">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed">
                                        {t(`projects.${project.translateKey}`)}
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
