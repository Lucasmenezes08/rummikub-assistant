import { useContext } from "react"
import { PlayerContext } from "../../store/playerInfo"
import PlayerCardInfo from "./playerCardInfo";

export default function PlayerCard (){
    const {players} = useContext(PlayerContext);
    return (
        <section className="grid sm:grid-cols-1 lg:grid-cols-4 mt-6">
            {players.map(player => (
                <PlayerCardInfo key={player.id} 
                    player={player}
                />
            ))}
        </section>
    )
}