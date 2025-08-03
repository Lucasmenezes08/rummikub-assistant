import { useContext } from "react";
import { ThemeContext } from "../../store/darkThemeContext";



export function WinnerButton ({onClick , isActive}){
    const {tema} = useContext(ThemeContext);
    const isActiveTheme = tema === 'dark'
        ? isActive
            ? 'flex items-center justify-center w-[6rem] h-[2rem] text-sm rounded-2xl bg-amber-300 cursor-pointer'
            : 'flex items-center justify-center w-[6rem] h-[2rem] text-sm rounded-2xl bg-gray-600 cursor-pointer'
            
        : isActive
            ? 'flex items-center justify-center w-[6rem] h-[2rem] text-sm rounded-2xl bg-amber-300 cursor-pointer' 
            : 'flex items-center justify-center w-[6rem] h-[2rem] text-sm rounded-2xl bg-gray-600 cursor-pointer'; 

    return (
        <section>
            <button className={`${isActiveTheme}`}  onClick={onClick}>Vencedor?</button>
        </section>
    )
}