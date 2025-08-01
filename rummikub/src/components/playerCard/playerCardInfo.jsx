import { useContext , useState } from "react"
import { PlayerContext } from "../../store/playerInfo"
import ScoreInput from "./scoreInput";
import { PlayerQuantidadeContext } from "../../store/playerQuantidadeContext";



export default function PlayerCardInfo ({player}){
    const {players , UpdateRoundScore} = useContext(PlayerContext);

 
    return (
        <section>
            <section>
                <section>
                    <p>{player.name}</p>
                    <p>Score Rodada: {player.scoreRodada}/Score Total: {player.scoreTotal}</p>
                </section>

                <section>
                    <button>Vencedor?</button>
                </section>
            </section>
            
            <section>
                <ScoreInput 
                    value={player.scoreRodada}
                    onChange={(e) => UpdateRoundScore(player.id , e.target.value)}
                />
            </section>

        </section>
    )
}