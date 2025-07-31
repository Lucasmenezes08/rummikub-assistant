import PlayerInput from "../components/playerName/playerInput";
import { useNavigate } from "react-router-dom";
import useBackNavigation from "../hooks/useBackNavigation";
import { useContext, useState } from "react";
import { ThemeContext } from "../store/darkThemeContext";
import { PlayerQuantidadeContext } from "../store/playerQuantidadeContext";
import BackButton from "../components/common/button-back";
import ConfirmButton from "../components/common/button-confirm";
import { PlayerContext } from "../store/playerInfo";


export default function PlayerName(){
    const navigate = useNavigate();
    const backRouter = useBackNavigation();
    const {tema} = useContext(ThemeContext);
    const {quantidade , alterarQuantidade} = useContext(PlayerQuantidadeContext);
    const {setPlayers} = useContext(PlayerContext);
    
    const [names , setNames] = useState(() => {
        const initialValue = [];
        for (let i = 0 ; i < quantidade ; i ++){
            initialValue.push('')
        }
        return initialValue;
    })

    function handleInput (index , newName) {
        const updatedNames = [...names];
        updatedNames[index] = newName;
        setNames(updatedNames)
        
    }

    function handleSubmit (){
        if (names.some(name => name.trim() === '')){
            return
        }

        else {
            setPlayers(names);
            navigate('/game');
        }
    }


    return (
         <section className={`relative h-screen w-full ${tema === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-black'}`}>
            
            <section className="absolute top-[2%] -translate-y-[2%] px-2">
                <BackButton onClick={backRouter}/>
            </section>

            <section className="absolute top-[5%] -translate-y-[2%] left-[50%] -translate-x-[50%]">
                <section className="flex flex-col items-center">
                    <h2 className="font-semibold text-center text-xl mb-[3rem]">Nome dos jogadores</h2>

                    <section className="flex flex-col gap-6">
                        {Array.from({length: quantidade}).map(( _ , index) => 
                            <PlayerInput 
                                key={index}
                                playerNumber={index + 1}
                                value={names[index]}
                                onChange={(event) => handleInput(index , event.target.value)}
                            />
                        )}
                    </section>

                    <section className="mt-[3.5rem]">
                        <ConfirmButton mensagem={'Iniciar jogo'} onClick={handleSubmit} disabled={names.some(name => name.trim() === '')}/>
                    </section>
                </section>
            </section>

        </section>
    )
}