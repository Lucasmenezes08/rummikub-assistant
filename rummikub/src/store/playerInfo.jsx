import { createContext, useEffect, useState } from "react";


export const PlayerContext = createContext();


export default function PlayerProvider ({children}){
    const [playerInfo , setPlayerInfo] = useState(() => {
        const playerObject = sessionStorage.getItem('playerInfo');
        return playerObject ? JSON.parse(playerObject) : [];
    })
    const [rodada , setRodada] = useState(() => {
        const rodadaAtual = sessionStorage.getItem('rodada');
        return rodadaAtual ? JSON.parse(rodadaAtual) : null;
    });


    function setPlayers (array) {
        const newArray = array.map((name , index) =>({
            id: index,
            name: name,
            scoreRodada: 0,
            scoreTotal: 0,
        }))
        setPlayerInfo(newArray)
    }

    useEffect (() => {
        sessionStorage.setItem('playerInfo', JSON.stringify(playerInfo));
        sessionStorage.setItem('rodada', JSON.stringify(rodada));
    }, [playerInfo , rodada]);

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