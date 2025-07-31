import { useContext } from "react";
import { CgDarkMode } from "react-icons/cg";
import { ThemeContext } from "../../store/darkThemeContext";

export default function DarkThemeButton ({onClick}){
    const {tema} = useContext(ThemeContext);
    return (
        <section className="">
            <button><CgDarkMode onClick={onClick} size={50} className={`${tema === 'dark' ? 'bg-slate-700' : ''} rounded-3xl cursor-pointer`}/></button>
        </section>
    )
}