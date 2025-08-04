import { useContext } from "react"
import { ThemeContext } from "../store/darkThemeContext"
import { PlayerContext } from "../store/playerInfo";
import { ResultadoGrid } from "../components/resultado/resultado-grid";

export default function Resultado (){
    const {tema} = useContext(ThemeContext);
    const {setPlayers , setRound , setRodada, rodadas , players , UpdateRoundScore , finishRound} = useContext(PlayerContext);

    return (
        <section className={`flex flex-col min-h-screen w-full overflow-y-hidden ${tema === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-black'}`}>
            <section>
                <h1>Resultados da partida</h1>

                <section>
                    <h2>Pódio</h2>
                    <section>
                        <ResultadoGrid/>
                    </section>
                </section>
            </section>
        </section>
    )
}