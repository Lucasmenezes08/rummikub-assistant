import { useContext } from "react";
import ConfirmButton from "../components/common/button-confirm";
import DarkThemeButton from "../components/common/button-darkTheme";
import { ThemeContext } from "../store/darkThemeContext";
import { Link, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

export default function Homepage (){
    const {tema , alterarTema} = useContext(ThemeContext);
    const navigate = useNavigate();


    function handleNavigate (){
        navigate('/quantidade');
    }
    return (
        <section 
            className={` relative h-screen w-full ${tema === 'dark' ? 'bg-slate-900' : 'bg-white'}`}>
            {
                /*
            <section className="absolute top-[10%] right-[2%] -translate-x-[2%] -translate-y-[90%] ">
                <DarkThemeButton onClick={() => alterarTema(tema)}/>
            </section>
                */
            }
            <motion.section  
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.75, ease: "easeInOut" }}className="">

                <h1 className={` w-full absolute text-3xl text-center top-[50%] -translate-y-[50%] whitespace-pre-wrap font-semibold ${tema === 'dark' ? 'text-white' : 'text-black'}`}>
                    Assistente Rummikub
                </h1>
            </motion.section>


            <section className="absolute  top-[90%] left-[50%] -translate-x-[50%] -translate-y-[90%]"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            >
                <ConfirmButton mensagem={'Vamos nessa!'} onClick={handleNavigate}></ConfirmButton>
            </section>
        </section>
        
    )
}