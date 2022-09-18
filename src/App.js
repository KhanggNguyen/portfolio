import React, { Suspense } from "react";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experiences } from "./components/Experiences";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { useEffect } from "react";
import useDarkMode from "./hook/useDarkMode";

export default function App() {
    const [colorTheme, setTheme] = useDarkMode(getDefaultTheme());

    function getDefaultTheme() {
        const selectedTheme = JSON.parse(localStorage.getItem("theme"));
        return selectedTheme || "dark";
    }

    return (
        <Suspense fallback="loading">
            <main className="font-sans text-black bg-white-300 dark:bg-gray-900 body-font">
                <Navbar />
                <About />
                <Experiences />
                <Projects />
                <Skills />
                <Contact />
            </main>
        </Suspense>
    );
}
