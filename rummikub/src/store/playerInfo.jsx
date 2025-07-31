import { createContext, useEffect, useState } from "react";


export const PlayerContext = createContext();


export default function PlayerProvider ({children}){
    const [playerInfo , setPlayerInfo] = useState(() => {
        const playerObject = sessionStorage.getItem('playerInfo');
        return playerObject ? JSON.parse(playerObject) : [];
    })

    useEffect (() => {
        sessionStorage.setItem('playerInfo', JSON.stringify(playerInfo))
    }, [playerInfo]);

    const value = {
        players: playerInfo,
        
    };


    return (
        <PlayerContext.Provider value={value}>
            {children}
        </PlayerContext.Provider>
    )
} 