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


    function UpdateRoundScore (playerId , score){
        const ScoreNumber = parseInt(score) || 0;

        setPlayerInfo(prevPlayers => prevPlayers.map(player =>
            player.id === playerId ? {...player , scoreRodada: ScoreNumber} : player
        ))
    }

    function finishRound (){
        setPlayerInfo(prevPlayers => prevPlayers.map(player => {
            const ScoreNumber = parseInt(player.scoreRodada) || 0;
            return {
                ...player,
                scoreTotal : player.scoreTotal + ScoreNumber,
                scoreRodada: 0,
            }
        }))

        handleRound();
    }


    function handleRound (){
        setRodada((prev) => prev + 1);
    }


    function setPlayers (array) {
        const newArray = array.map((name , index) =>({
            id: index,
            name: name,
            scoreRodada: 0,
            scoreRodadaAnterior: 0,
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
        setRodada,
        setPlayers : setPlayers,
        setRound: handleRound,
        UpdateRoundScore,
        finishRound,
    };


    return (
        <PlayerContext.Provider value={value}>
            {children}
        </PlayerContext.Provider>
    )
} 