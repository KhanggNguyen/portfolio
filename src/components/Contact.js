import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export const Contact = () => {
    const { t } = useTranslation();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    function onSubmit(data) {
        const { name, email, phone, message } = data;

        try {
            const templateParams = {
                from_name: name,
                email,
                phone,
                message,
            };

            emailjs
                .send(
                    process.env.REACT_APP_SERVICE_ID,
                    process.env.REACT_APP_TEMPLATE_ID,
                    templateParams,
                    process.env.REACT_APP_USER_ID
                )
                .then(
                    function (response) {
                        console.log("Mail sent successfully.", response);
                        reset();
                    },
                    function (error) {
                        console.log(`Error while sending mail : `, error);
                    }
                );
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{ filter: "opacity(0.7)" }}
                        src={`https://www.google.com/maps/embed/v1/place?q=Toulouse&key=${process.env.REACT_APP_GOOGLEMAP_API}`}
                    />
                    <div className="dark:bg-gray-900 bg-white dark:text-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-2/5 px-6">
                            <h2 className="title-font font-semibold tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <p className="mt-1">Toulouse, France</p>
                        </div>
                        <div className="lg:w-3/5 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a className="text-indigo-400 leading-relaxed">
                                nguyen.hkhang.96@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <form
                    netlify="true"
                    id="contact-form"
                    name="contact"
                    className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                >
                    <h2 className="sm:text-4xl text-3xl mb-1 font-medium title-font dark:text-white ">
                        {t("contact.title")}
                    </h2>
                    <p className="leading-relaxed mb-5 dark:text-white">
                        {t("contact.intro")}
                    </p>
                    <div className="relative mb-4">
                        <label
                            htmlFor="name"
                            className="leading-7 text-sm dark:text-gray-400"
                        >
                            {t("contact.name")}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Dupont Toto"
                            {...register("name", {
                                required: "Please enter your name.",
                                maxLength: {
                                    value: 30,
                                    message:
                                        "Name cannot be longer than 30 characters.",
                                },
                            })}
                            className="w-full dark:bg-gray-800 border-solid border-2 border-emerald-700 rounded border dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                        {errors.name && (
                            <span className="errorMessage text-red-600">
                                {errors.name.message}
                            </span>
                        )}
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="tel"
                            className="leading-7 text-sm dark:text-gray-400"
                        >
                            {t("contact.phone")}
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="xx xx xx xx xx"
                            {...register("phone", {
                                required: false,
                                pattern:
                                    /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/,
                            })}
                            className="w-full dark:bg-gray-800 border-solid border-2 border-emerald-700 rounded border dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                        {errors.phone && (
                            <span className="errorMessage text-red-600">
                                Please enter a valid phone number.
                            </span>
                        )}
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="email"
                            className="leading-7 text-sm dark:text-gray-400"
                        >
                            {t("contact.email")}
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="toto@gmail.com"
                            {...register("email", {
                                required: true,
                                pattern:
                                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            })}
                            className="w-full dark:bg-gray-800 border-solid border-2 border-emerald-700 rounded border dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                        {errors.email && (
                            <span className="errorMessage text-red-600">
                                Please enter a valid email address
                            </span>
                        )}
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="leading-7 text-sm dark:text-gray-400"
                        >
                            {t("contact.message")}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Hello,..."
                            {...register("message", {
                                required: "Please enter a message",
                                minLength: {
                                    value: 20,
                                    message:
                                        "Message cannot be less than 20 characters.",
                                },
                            })}
                            className="w-full dark:bg-gray-800 border-solid border-2 border-emerald-700 rounded border dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none dark:text-gray-100 h-32 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                        {errors.message && (
                            <span className="errorMessage">
                                Please enter a message
                            </span>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};
