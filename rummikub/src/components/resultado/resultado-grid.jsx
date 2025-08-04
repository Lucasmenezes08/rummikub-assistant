import { PlayerContext } from "../../store/playerInfo";
import { ResultadoPlayer } from "./resultado-info";
import { useContext } from "react";
import { motion } from "framer-motion";



const variantsContainer = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 1.7
        }
    }

}



export function ResultadoGrid () {
    const { players } = useContext(PlayerContext);
    
    const rankedPlayers = [...players].sort((a,b) => b.scoreTotal - a.scoreTotal);

    
    
    return (
        <motion.section variants={variantsContainer} initial='hidden' animate='visible'>
            {rankedPlayers.map((player , index) => 
                <ResultadoPlayer key={player.id} player={player} rank={index + 1}/>
            )}
        </motion.section>
    )
}