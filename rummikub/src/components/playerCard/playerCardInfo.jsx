import { useContext , useState } from "react"
import { PlayerContext } from "../../store/playerInfo"
import ScoreInput from "./scoreInput";
import { PlayerQuantidadeContext } from "../../store/playerQuantidadeContext";



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
                    <button className="flex items-center justify-center w-[4rem] h-[2rem] text-xs rounded-2xl bg-gray-600 cursor-pointer" onClick={() => handleWinner(player.id)}>Vencedor?</button>
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