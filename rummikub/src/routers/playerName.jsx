import PlayerInput from "../components/playerName/playerInput";
import { useNavigate } from "react-router-dom";
import useBackNavigation from "../hooks/useBackNavigation";
import { useContext } from "react";
import { ThemeContext } from "../store/darkThemeContext";
import { PlayerQuantidadeContext } from "../store/playerQuantidadeContext";
import BackButton from "../components/common/button-back";


export default function PlayerName(){
    const navigate = useNavigate();
    const backRouter = useBackNavigation();
    const {tema} = useContext(ThemeContext);
    const {quantidade , alterarQuantidade} = useContext(PlayerQuantidadeContext);
    
    function handleConfirm (){
        if (!quantidade){
            return
        }
        navigate('/playername');
    }


    return (
         <section className={`relative h-screen w-full ${tema === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-black'}`}>
            
            <section className="absolute top-[2%] -translate-y-[2%] px-2">
                <BackButton onClick={backRouter}/>
            </section>

            <section className="absolute top-[2%] -translate-y-[2%] left-[50%] -translate-x-[50%]">
                <section className="flex flex-col items-center">
                    <h2 className="font-semibold text-center text-xl mb-[4rem]">Nome dos jogadores</h2>

                    <PlayerInput/>
                </section>
            </section>

        </section>
    )
}