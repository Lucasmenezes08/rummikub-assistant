import { useContext } from "react";
import { GoArrowLeft } from "react-icons/go";
import { ThemeContext } from "../../store/darkThemeContext";


export default function BackButton ({onClick}){
    const {tema} = useContext(ThemeContext);
    return (
        <button onClick={onClick} >
            <GoArrowLeft size={35} className={`${tema === 'dark' ? 'text-white' : 'text-black'}`}/>
        </button>
    )
}