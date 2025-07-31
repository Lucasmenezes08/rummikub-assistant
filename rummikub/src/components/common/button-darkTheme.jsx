import { useContext } from "react";
import { CiDark } from "react-icons/ci";
import { ThemeContext } from "../../store/darkThemeContext";

export default function DarkThemeButton ({onClick}){
    const {tema} = useContext(ThemeContext);
    return (
        <section className="">
            <button><CiDark onClick={onClick} size={40} className={`${tema === 'dark' ? 'bg-gray-600' : 'bg-gray-200'} rounded-2xl`}/></button>
        </section>
    )
}