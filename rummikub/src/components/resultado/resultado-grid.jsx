import { PlayerContext } from "../../store/playerInfo";
import { ResultadoPlayer } from "./resultado-info";
import { useContext } from "react";

export function ResultadoGrid () {
    const { players } = useContext(PlayerContext);
    
    const rankedPlayers = [...players].sort((a,b) => b.scoreTotal - a.scoreTotal);

    
    
    return (
        <section>
            {rankedPlayers.map((player , index) => 
                <ResultadoPlayer key={player.id} player={player} rank={index + 1}/>
            )}
        </section>
    )
}