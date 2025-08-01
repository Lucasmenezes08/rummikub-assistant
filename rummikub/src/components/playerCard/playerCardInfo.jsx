import { useContext } from "react"
import { PlayerContext } from "../../store/playerInfo"
import ScoreInput from "./scoreInput";



export default function PlayerCardInfo ({id , name , scoreRodada , scoreTotal, winner}){
    const {players} = useContext(PlayerContext);
    return (
        <section>
            <section>
                <section>
                    <p>{name}</p>
                    <p>Score Rodada: {scoreRodada}/Score Total: {scoreTotal}</p>
                </section>

                <section>
                    <button>Vencedor?</button>
                </section>
            </section>
            
            <section>
                <ScoreInput/>
            </section>

        </section>
    )
}