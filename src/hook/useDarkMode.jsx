import { useEffect, useState } from 'react';

export default function useDarkMode(defaultTheme){

    const [theme, setTheme] = useState(defaultTheme);
    const colorTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect( () => {
        const root = window.document.documentElement;

        root.classList.remove(colorTheme);

        root.classList.add(theme);
    }, [theme], colorTheme);

    return [colorTheme, setTheme];
}