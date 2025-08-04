import { useContext } from "react"
import { ThemeContext } from "../../store/darkThemeContext"
import { motion } from "framer-motion";


export default function SelectButton ({number , onClick , isActive}){

    const {tema} = useContext(ThemeContext)

    const isActiveTheme = tema === 'dark'
        ? isActive
            ? 'bg-sky-500 ring-2 ring-slate-500'
            : 'bg-slate-700 hover:bg-slate-600'
            
        : isActive
            ? 'bg-red-600 text-white ring-2 ring-red-400' 
            : 'bg-gray-300 hover:bg-gray-400'; 
    return (
        <section>
            <motion.button 
                className={`flex items-center justify-center w-[11rem] h-[3rem] ${isActiveTheme} rounded-2xl text-xl ${tema === 'dark' ? 'text-white' : 'text-black'} cursor-pointer`} 
                onClick={onClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >{number}</motion.button>
        </section>
    )
}