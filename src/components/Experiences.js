import React from "react";
import { experiences } from "../data";
import { BriefcaseIcon } from "@heroicons/react/solid";
import { transformDate } from "../helpers/date-transformer";
import "../styles/experiences.css";
import { useTranslation } from "react-i18next";

const Timeline = ({ theme, children }) => {
    return children ? (
        <div className="timeline-wrapper">
            <div className="timeline-wrapper-inner">{children}</div>
        </div>
    ) : (
        <></>
    );
};

const Container = ({ theme, children }) => {
    return children ? (
        <section className="experiences">
            {children[0]}
            <div>{children[1]}</div>
        </section>
    ) : (
        <></>
    );
};

const BodyWrapper = ({ title, children }) => {
    return (
        <article className="body-wrapper">
            <p className="title text-left font-medium m-0">{title}</p>
            <ul className="body-inner text-left p-0 mt-5 mb-16 last:mb-0">
                {children}
            </ul>
        </article>
    );
};

const Description = ({ theme, text, variant = "description" }) => {
    switch (variant) {
        case "subtitle":
            return <Subtitle text={text} />;
        case "descriptionSubtitle":
            return <DescriptionSubtitle text={text} />;
        default:
            return <DescriptionText text={text} />;
    }
};

const Subtitle = ({ theme, text }) => {
    return <div className="subtitle">{text}</div>;
};

const DescriptionSubtitle = ({ theme, text }) => {
    return <li className="description-subtitle">{text}</li>;
};

const DescriptionText = ({ theme, text }) => {
    return <li className="description-text">{text}</li>;
};

const DateSection = ({ startDate, endDate, currentYear = false }) => {
    const d = new Date();
    const _year = d.getFullYear();

    const _currentYear = currentYear && (
        <time dateTime={_year.toString()}>{_year}</time>
    );

    const _endDate = endDate ? (
        <>
            <span className="text-sm mt-3 p-0">To</span>
            <time dateTime={endDate}>{transformDate({ date: endDate })}</time>
        </>
    ) : (
        <>
            <span className="text-sm mt-3 p-0">To</span>
            <span>Now</span>
        </>
    );

    const _startDate = (
        <>
            <span className="text-sm mt-3 p-0">From</span>
            <time dateTime={startDate}>
                {transformDate({ date: startDate })}
            </time>
        </>
    );

    return (
        <p className="date-wrapper">
            {_currentYear}
            {_endDate}
            {_startDate}
        </p>
    );
};

export const Experiences = () => {
    const { t } = useTranslation();

    return (
        <section id="experiences" className="dark:text-gray-400 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40  min-h-screen">
                <div className="flex flex-col w-full mb-20">
                    <BriefcaseIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 dark:text-white">
                        {t('experiences.title')}
                    </h1>
                </div>
                <div className="flex flex-wrap m-4">
                    <Timeline>
                        {experiences.map((experience) => (
                            <Container key={experience.startDate}>
                                <DateSection
                                    startDate={experience.startDate}
                                    endDate={experience.endDate}
                                    currentYear={experience.currentYear}
                                />
                                <BodyWrapper title={experience.title}>
                                    <Subtitle
                                        text={`${t('experiences.location')}: ${experience.location}`}
                                    />
                                    <Subtitle
                                        text={`${t('experiences.company')}: ${experience.company}`}
                                    />
                                    <DescriptionSubtitle
                                        text={`${t('experiences.keywords')} : ${experience.keywords}`}
                                    />
                                    <Description
                                        text={experience.description}
                                    />
                                </BodyWrapper>
                            </Container>
                        ))}
                    </Timeline>
                </div>
            </div>
        </section>
    );
};
