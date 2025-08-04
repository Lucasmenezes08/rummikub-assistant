import { useContext } from "react"
import { ThemeContext } from "../../store/darkThemeContext"
import { motion } from "framer-motion";

export default function ConfirmButton ({mensagem , onClick , disabled}){
    const {tema} = useContext(ThemeContext);

    const disabledClasses = tema === 'dark'
        ? 'bg-sky-400 hover:bg-sky-600 disabled:bg-sky-900 disabled:hover:bg-sky-900 disabled:text-gray-500'
        : 'bg-red-500 hover:bg-red-700 disabled:bg-red-300 disabled:hover:bg-red-300';


    return (
        <section className="w-full">
            <motion.button 
            onClick={onClick} 
            disabled={disabled}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            className={` w-[20rem] h-[4rem] py-5 rounded-3xl text-xl/tight font-semibold ${tema === 'dark' ? 'bg-sky-400 hover:bg-sky-600' : 'bg-red-500 hover:bg-red-700 '}  text-white  cursor-pointer disabled:${disabledClasses} disabled:cursor-not-allowed`}
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            transition={{ type: 'spring', stiffness: 400, damping: 17 , duration: 0.75, ease: "easeInOut"}}
            >{mensagem}</motion.button>
        </section>
    )
    
}