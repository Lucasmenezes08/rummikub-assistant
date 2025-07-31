import { useContext } from "react"
import { ThemeContext } from "../../store/darkThemeContext"


export default function SelectButton ({number , onClick}){

    const {tema} = useContext(ThemeContext)

    return (
        <section className={`flex items-center justify-center w-[11rem] h-[3rem] ${tema === 'dark' ?  'bg-slate-700' : 'bg-gray-300'} rounded-2xl text-xl ${tema === 'dark' ? 'text-white' : 'text-black'}`}>
            <button onClick={onClick}>{number}</button>
        </section>
    )
}