import { useContext } from "react"
import { PlayerContext } from "../../store/playerInfo"



export default function PlayerCardInfo ({id , name , scoreRodada , scoreTotal, winner}){
    const {players} = useContext(PlayerContext);
    return (
        <section>
            <section>
                <p>{name}</p>
                <p>Score Rodada: {scoreRodada}/Score Total: {scoreTotal}</p>
            </section>

            <section>
                <button>Vencedor?</button>
            </section>
        </section>
    )
}