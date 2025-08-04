import { useContext } from "react"
import { ThemeContext } from "../store/darkThemeContext"
import { PlayerContext } from "../store/playerInfo";
import { ResultadoGrid } from "../components/resultado/resultado-grid";
import ConfirmButton from "../components/common/button-confirm";
import { useNavigate } from "react-router-dom";


export default function Resultado (){
    const navigate = useNavigate();
    const {tema} = useContext(ThemeContext);
    const {setPlayers , resetGame, setRound , setRodada, rodadas , players , UpdateRoundScore , finishRound} = useContext(PlayerContext);



    function handleRestartGame (){
        navigate('/');
        resetGame();
    }

    return (
        <section className={`flex flex-col min-h-screen w-full overflow-y-hidden ${tema === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-black'}`}>
            <section className="flex flex-col">
                <h1 className="text-center pt-5 pb-15 font-semibold text-lg">Resultados da partida</h1>

                <section className="flex flex-col justify-center items-center">
                    <h2 className="text-center pb-8 font-bold text-3xl">Pontuação final</h2>

                    <section className="flex-grow w-full max-w-6xl mx-auto py-5">
                        <ResultadoGrid/>
                    </section>

                    <section className="pb-5">
                        <ConfirmButton mensagem={'Reiniciar jogo'} onClick={handleRestartGame}/>
                    </section>
                </section>

                
            </section>

            
            
        </section>
    )
}