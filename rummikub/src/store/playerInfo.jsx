import { createContext, useEffect, useState } from "react";


export const PlayerContext = createContext();


export default function PlayerProvider ({children}){
    const [playerInfo , setPlayerInfo] = useState(() => {
        const playerObject = sessionStorage.getItem('playerInfo');
        return playerObject ? JSON.parse(playerObject) : [];
    })

    function setPlayers (array) {
        const newArray = array.map((name , index) =>({
            id: index,
            name: name,
            score: 0,
        }))
        setPlayerInfo(newArray)
    }

    useEffect (() => {
        sessionStorage.setItem('playerInfo', JSON.stringify(playerInfo))
    }, [playerInfo]);

    const value = {
        players: playerInfo,
        setPlayers : setPlayers
    };


    return (
        <PlayerContext.Provider value={value}>
            {children}
        </PlayerContext.Provider>
    )
} 