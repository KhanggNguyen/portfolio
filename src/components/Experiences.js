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
            <p className="title m-0 text-left font-medium">{title}</p>
            <ul className="body-inner mt-5 mb-16 p-0 text-left last:mb-0">
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
    const { t } = useTranslation();
    const d = new Date();
    const _month = d.getMonth();
    const _year = d.getFullYear();

    const _currentYear = currentYear && (
        <time dateTime={_month.toString() + _year.toString()}>{`${(_month + 1)
            .toString()
            .padStart(2, "0")} ${_year}`}</time>
    );

    const _endDate = endDate ? (
        <>
            <time dateTime={endDate}>
                {transformDate({
                    date: endDate,
                    locale: "fr-FR",
                }).toLowerCase()}
            </time>
        </>
    ) : (
        <>
            <span>{t("experiences.now")}</span>
        </>
    );

    const _startDate = (
        <>
            <time dateTime={startDate}>
                {transformDate({
                    date: startDate,
                    locale: "fr-FR",
                }).toLowerCase()}
            </time>
        </>
    );

    return (
        <p className="date-wrapper">
            {_currentYear}
            {_endDate}
            <span className="pr-5">
                <strong>|</strong>
            </span>
            {_startDate}
        </p>
    );
};

export const Experiences = () => {
    const { t } = useTranslation();

    return (
        <section id="experiences" className="body-font dark:text-gray-400">
            <div className="container mx-auto min-h-screen px-5 py-10 text-center  lg:px-40">
                <div className="mb-20 flex w-full flex-col">
                    <BriefcaseIcon className="mx-auto mb-4 inline-block w-10" />
                    <h1 className="title-font mb-4 text-3xl font-medium dark:text-white sm:text-4xl">
                        {t("experiences.title")}
                    </h1>
                </div>
                <div className="m-4 flex flex-wrap">
                    <Timeline>
                        {experiences.map((experience) => (
                            <Container key={experience.startDate}>
                                <DateSection
                                    startDate={experience.startDate}
                                    endDate={experience.endDate}
                                    currentYear={experience.currentYear}
                                />
                                <BodyWrapper title={`${t(`experiences.${experience.title}`)}`}>
                                    <Subtitle
                                        text={`${t("experiences.location")}: ${
                                            experience.location
                                        }`}
                                    />
                                    <Subtitle
                                        text={`${t("experiences.company")}: ${
                                            experience.company
                                        }`}
                                    />
                                    <DescriptionSubtitle
                                        text={`${t("experiences.keywords")} : ${
                                            experience.keywords
                                        }`}
                                    />
                                    <Description
                                        text={t(`experiences.${experience.translateKey}`)}
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
