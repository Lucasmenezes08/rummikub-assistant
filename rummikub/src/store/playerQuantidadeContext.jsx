import { createContext } from "react";
import { useState , useEffect } from "react";




export const PlayerQuantidadeContext = createContext(); 


export default function PlayerQuantidadeProvider ({children}){
    const [quantidadePlayers , setQuantidadePlayers] = useState(() => {
            const quantidade = sessionStorage.getItem('quantidade');
            return quantidade ? JSON.parse(quantidade) : null;
        });
    
    
        function handleQuantidade (quantidade){
            setQuantidadePlayers(quantidade)
        }
    
        useEffect (() => {
            console.log(quantidadePlayers);
            if (quantidadePlayers === null){
                sessionStorage.removeItem('quantidade');
            }
            else{
                sessionStorage.setItem('quantidade' , JSON.stringify(quantidadePlayers))
            }
            
           
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