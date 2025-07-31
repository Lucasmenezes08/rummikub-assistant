import { useContext } from "react"
import { ThemeContext } from "../../store/darkThemeContext"

export default function ConfirmButton ({mensagem , onClick}){
    const {tema} = useContext(ThemeContext);
    return (
        <section className="w-full">
            <button onClick={onClick} className={` w-[20rem] h-[4rem] py-5 rounded-3xl text-xl/tight font-semibold ${tema === 'dark' ? 'bg-sky-400' : 'bg-red-500 '}  text-white `}>{mensagem}</button>
        </section>
    )
    
}