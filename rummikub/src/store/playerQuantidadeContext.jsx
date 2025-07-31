import { createContext } from "react";
import { useState , useEffect } from "react";




export const PlayerQuantidadeContext = createContext(); 


export default function PlayerQuantidadeProvider ({children}){
    const [quantidadePlayers , setQuantidadePlayers] = useState(() => {
            const quantidade = localStorage.getItem('quantidade');
            return quantidade ? JSON.parse(quantidade) : 4;
        });
    
    
        function handleQuantidade (quantidade){
            setQuantidadePlayers(quantidade)
        }
    
        useEffect (() => {
            localStorage.setItem('quantidade' , JSON.stringify(quantidadePlayers))
        }, [quantidadePlayers]);


    const value = {
        quantidade : quantidadePlayers,
        alterarQuantidade : handleQuantidade,
    }
    

    return (
        <PlayerQuantidadeContext.Provider value={value}>
            {children}
        </PlayerQuantidadeContext.Provider>
    )
}