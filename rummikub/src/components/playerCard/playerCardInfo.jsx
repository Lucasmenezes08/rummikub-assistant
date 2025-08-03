import { useContext , useState } from "react"
import { PlayerContext } from "../../store/playerInfo"
import ScoreInput from "./scoreInput";
import { PlayerQuantidadeContext } from "../../store/playerQuantidadeContext";
import { WinnerButton } from "../common/button-winner";



export default function PlayerCardInfo ({player}){
    const {players , UpdateRoundScore , handleWinner} = useContext(PlayerContext);

 
    return (
        <section className="flex flex-col gap-10">
            <section className="flex flex-row justify-between items-center">
                <section className="flex flex-col">
                    <p className="font-medium text-lg">{player.name}</p>
                    <p className="font-light text-gray-300">Score: {player.scoreTotal}</p>
                </section>

                <section>
                   <WinnerButton onClick={() => handleWinner(player.id)} isActive={player.winner === true}/>
                </section>
            </section>
            
            <section className="flex justify-center items-center pb-15">
                <ScoreInput 
                    value={player.scoreRodada}
                    onChange={(e) => UpdateRoundScore(player.id , e.target.value)}
                />
            </section>

        </section>
    )
}