import { useContext } from "react"
import { ThemeContext } from "../../store/darkThemeContext"

export default function ScoreInput ({value , onChange}){
    const {tema} = useContext(ThemeContext)

    const inputTheme = tema === 'dark'
        ? 'bg-slate-700 w-[22rem] h-[4rem] rounded-2xl px-5 text-left text-white text-lg overflow-hidden'
        : 'bg-gray-300  w-[22rem] h-[4rem] rounded-2xl px-5 text-left text-black text-lg overflow-hidden'

    return (

        <section>
            <input 
            type="text"
            placeholder="Insira o score" 
            maxLength={4} 
            onChange={onChange} 
            value={value}
            className={`${inputTheme} gap-5`}
            />
        </section>
    )
}