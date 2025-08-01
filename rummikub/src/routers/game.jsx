import { useNavigate } from "react-router-dom";
import useBackNavigation from "../hooks/useBackNavigation";
import { useContext } from "react";
import { ThemeContext } from "../store/darkThemeContext";
import { PlayerQuantidadeContext } from "../store/playerQuantidadeContext";
import { PlayerContext } from "../store/playerInfo";
import BackButton from "../components/common/button-back";
import PlayerCard from "../components/playerCard/playerCard";
import ConfirmButton from "../components/common/button-confirm";

export default function Game (){
    const navigate = useNavigate();
    const backRouter = useBackNavigation();
    const {tema} = useContext(ThemeContext);
    const {quantidade , alterarQuantidade} = useContext(PlayerQuantidadeContext);
    const {setPlayers , setRound , setRodada, rodadas , players , UpdateRoundScore , finishRound} = useContext(PlayerContext);
    const goBack = useBackNavigation();

    function handleGoBack() {
        setRodada(1); 
        goBack();     
    }

    return (
        <section className={`relative h-screen w-full ${tema === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-black'}`}>
            <section className="absolute top-[2%] -translate-y-[2%] px-2">
                <BackButton onClick={handleGoBack}/>
            </section>

            <section className="absolute top-[5%] -translate-y-[2%] left-[50%] -translate-x-[50%]">
                <section className="flex flex-col items-center">
                     <h2>Jogo</h2>
                </section>

                <section>
                    <h3>Rodada: {rodadas}</h3>
                </section>

                <section>
                    <PlayerCard/>
                </section>

                <section>
                    <ConfirmButton  onClick={finishRound}mensagem={`Finalizar rodada ${rodadas}`} />
                </section>
            </section>


        </section>
    )
}