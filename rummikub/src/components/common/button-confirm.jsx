import { useContext } from "react"
import { ThemeContext } from "../../store/darkThemeContext"

export default function ConfirmButton (){
    const {tema} = useContext(ThemeContext);
    return (
        <section className="w-full">
            <button className={` w-[20rem] h-[4rem] py-5 rounded-3xl font-3xl font-semibold ${tema === 'dark' ? 'bg-sky-400' : 'bg-red-500 '}  text-white `}>Vamos nessa!</button>
        </section>
    )
    
}