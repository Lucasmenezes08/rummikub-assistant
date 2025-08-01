import { useContext } from "react"
import { PlayerContext } from "../../store/playerInfo"
import PlayerCardInfo from "./playerCardInfo";

export default function PlayerCard (){
    const {players} = useContext(PlayerContext);
    return (
        <section>
            {players.map(player => (
                <PlayerCardInfo key={player.id} 
                    name={player.name} 
                    scoreRodada={player.scoreRodada} 
                    scoreTotal={player.scoreTotal} 
                    winner={player.winner}
                />
            ))}
        </section>
    )
}