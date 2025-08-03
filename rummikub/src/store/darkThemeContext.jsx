import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();




export default function ThemeProvider ({children}){
    const [currentTheme , setCurrentTheme] = useState(() => {
        const temaSalvo = localStorage.getItem('theme');
        return temaSalvo || 'dark';
    });

    function handleTheme (theme){
        if (theme === 'dark'){
            setCurrentTheme('light');
        }
        
        else if (theme === 'light') {
            setCurrentTheme('dark');
        }
    }

    useEffect (() => {
        localStorage.setItem('theme' , JSON.stringify(currentTheme))
    }, [currentTheme])


    const value = {
        tema : currentTheme,
        alterarTema: handleTheme,
    }


    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}