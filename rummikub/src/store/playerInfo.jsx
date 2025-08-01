import { createContext, useEffect, useState } from "react";


export const PlayerContext = createContext();


export default function PlayerProvider ({children}){
    const [playerInfo , setPlayerInfo] = useState(() => {
        const playerObject = sessionStorage.getItem('playerInfo');
        return playerObject ? JSON.parse(playerObject) : [];
    })
    const [rodada , setRodada] = useState(() => {
        const rodadaAtual = sessionStorage.getItem('rodada');
        return rodadaAtual ? JSON.parse(rodadaAtual) : 1;
    });


    function handleRound (){
        setRodada((prev) => prev + 1);
    }


    function setPlayers (array) {
        const newArray = array.map((name , index) =>({
            id: index,
            name: name,
            scoreRodada: 0,
            scoreTotal: 0,
            winner: false,
        }))
        setPlayerInfo(newArray)
    }

    useEffect (() => {
        sessionStorage.setItem('playerInfo', JSON.stringify(playerInfo));
    }, [playerInfo]);

    useEffect (() => {
        sessionStorage.setItem('rodada', JSON.stringify(rodada));
    } , [rodada])

    const value = {
        players: playerInfo,
        rodadas: rodada,
        setPlayers : setPlayers,
        setRound: handleRound,
    };


    return (
        <PlayerContext.Provider value={value}>
            {children}
        </PlayerContext.Provider>
    )
} 