import { useContext, useEffect, useState } from "react";
import BackButton from "../components/common/button-back";
import useBackNavigation from "../hooks/useBackNavigation";
import { ThemeContext } from "../store/darkThemeContext";
import SelectButton from "../components/common/button-select";
import ConfirmButton from "../components/common/button-confirm";
import { PlayerQuantidadeContext } from "../store/playerQuantidadeContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


export default function QuantidadePlayer () {
    const navigate = useNavigate();
    const backRouter = useBackNavigation()
    const {tema} = useContext(ThemeContext);
    const {quantidade , alterarQuantidade} = useContext(PlayerQuantidadeContext);
    


    function handleConfirm (){
        if (!quantidade){
            return
        }
        navigate('/playername');
    }


    return (
        <motion.section 
        className={`relative h-screen w-full ${tema === 'dark' ? 'bg-slate-900' : 'bg-white'}`}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ duration: 0.5 , ease: "easeInOut"}}
        >
            <section className="absolute top-[2%] -translate-y-[2%] px-5">
                <BackButton onClick={backRouter}/>
            </section>

            <section className="absolute top-[40%] -translate-y-[40%] px-2 lg:left-[50%] lg:-translate-x-[50%]">
                <section className={`flex flex-col items-center ${tema === 'dark' ? 'text-white' : 'text-black'}`}>
                    <h1 className="text-2xl font-semibold text-center py-10"> Selecione o número de jogadores</h1>

                    <section className="grid md: grid-cols-2 gap-5 lg:gap-8 justify-center">
                        <SelectButton number={2} onClick={() => alterarQuantidade(2)} isActive={quantidade === 2} />  
                        <SelectButton number={3} onClick={() => alterarQuantidade(3)} isActive={quantidade === 3} /> 
                        <section className="col-span-2 flex justify-center">
                             <SelectButton number={4} onClick={() => alterarQuantidade(4)} isActive={quantidade === 4} /> 
                        </section>
                       
                    </section>
                </section>
            </section>


            <section className="absolute  top-[90%] left-[50%] -translate-x-[50%] -translate-y-[90%]">
                <ConfirmButton mensagem={'Confirmar'} onClick={handleConfirm} disabled={!quantidade}/>
            </section>



        </motion.section>
    )
}