import React from "react";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { useEffect } from "react";
import useDarkMode from "./hook/useDarkMode";


export default function App() {
    const [colorTheme, setTheme] = useDarkMode();

    useEffect(() => {
        setTheme('dark');
    }, []);

    return (
        <main className="text-black bg-white-900 dark:bg-gray-900 body-font">
            <Navbar/>
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
        </main>
    );
}
