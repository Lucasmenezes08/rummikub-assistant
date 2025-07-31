import { useContext } from "react"
import { ThemeContext } from "../../store/darkThemeContext"


export default function SelectButton ({number , onClick}){

    const {tema} = useContext(ThemeContext)

    return (
        <section className={`flex items-center justify-center w-[11rem] h-[3rem] ${tema === 'dark' ?  'bg-slate-700 hover:bg-slate-800 transition: ease-in-out' : 'bg-gray-300 hover:bg-gray-400'} rounded-2xl text-xl ${tema === 'dark' ? 'text-white' : 'text-black'} cursor-pointer`}>
            <button onClick={onClick}>{number}</button>
        </section>
    )
}