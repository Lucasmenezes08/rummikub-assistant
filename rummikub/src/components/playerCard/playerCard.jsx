import { useContext } from "react"
import { PlayerContext } from "../../store/playerInfo"
import PlayerCardInfo from "./playerCardInfo";
import { motion } from "framer-motion";


const variantsContainer = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }

}


export default function PlayerCard (){
    const {players} = useContext(PlayerContext);
    return (
        <motion.section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-25 mt-6"
            variants={variantsContainer}
            initial="hidden"
            animate="visible"
        >
            {players.map(player => (
                <PlayerCardInfo key={player.id} 
                    player={player}
                />
            ))}
        </motion.section>
    )
}