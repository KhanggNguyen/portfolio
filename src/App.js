import React, { Suspense } from "react";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experiences } from "./components/Experiences";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import useDarkMode from "./hook/useDarkMode";

export default function App() {
    const [colorTheme, setTheme] = useDarkMode();

    return (
        <Suspense fallback="loading">
            <main
                className={`bg-white-300 body-font font-sans text-black dark:bg-gray-900 ${
                    colorTheme === "dark" ? "dark" : ""
                }`}
            >
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
