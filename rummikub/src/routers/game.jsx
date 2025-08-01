import { useNavigate } from "react-router-dom";
import useBackNavigation from "../hooks/useBackNavigation";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../store/darkThemeContext";
import { PlayerQuantidadeContext } from "../store/playerQuantidadeContext";
import { PlayerContext } from "../store/playerInfo";
import BackButton from "../components/common/button-back";
import PlayerCard from "../components/playerCard/playerCard";
import ConfirmButton from "../components/common/button-confirm";

export default function Game (){
    const navigate = useNavigate();
    const {tema} = useContext(ThemeContext);
    const {quantidade , alterarQuantidade} = useContext(PlayerQuantidadeContext);
    const {setPlayers , setRound , setRodada, rodadas , players , UpdateRoundScore , finishRound} = useContext(PlayerContext);
    const goBack = useBackNavigation();

    function handleGoBack() {
        setRodada(1); 
        goBack();     
    }

    useEffect (() => {
        if (rodadas > 3) {
            navigate('/resultado')
        }
    } , [rodadas , navigate])

    return (
        <section className={`flex flex-col min-h-screen w-full overflow-y-hidden ${tema === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-black'}`}>
            <section className="sticky top-0 z-10 flex items-center justify-between w-full p-4">
                <section className="">
                    <BackButton onClick={handleGoBack}/>
                </section>

                <section className="">
                     <h2>Jogo</h2>
                     <h3>Rodada: {rodadas}</h3>
                </section>

            </section>
          
            <section className="flex flex-col justify-center items-center">

                <section className="flex-grow w-full max-w-6xl mx-auto p-4">
                    <PlayerCard/>
                </section>

                <section className="pb-10">
                    <ConfirmButton  onClick={finishRound} mensagem={`Finalizar rodada ${rodadas}`} />
                </section>
            </section>


        </section>
    )
}