import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import languages from "../constants/language";

const Lang = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState("fr-FR");

    const changeLanguage = (event) => {
        setLang(event.target.value);
        i18n.changeLanguage(event.target.value);
    };

    return (
        <div className="relative inline-flex mx-5">
            <svg
                className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 412 232"
            >
                <path
                    d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                    fill="#648299"
                    fillRule="nonzero"
                />
            </svg>
            <select
                value={lang}
                className="border border-gray-300 rounded-md text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                onChange={changeLanguage}
            >
                {Object.keys(languages).map((key, index) => {
                    return <option key={index} value={key}>{languages[key]}</option>;
                })}
            </select>
        </div>
    );
};

export default Lang;
