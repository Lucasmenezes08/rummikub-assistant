import { useNavigate } from "react-router-dom";
import useBackNavigation from "../hooks/useBackNavigation";
import { useContext } from "react";
import { ThemeContext } from "../store/darkThemeContext";
import { PlayerQuantidadeContext } from "../store/playerQuantidadeContext";
import { PlayerContext } from "../store/playerInfo";
import BackButton from "../components/common/button-back";

export default function Game (){
    const navigate = useNavigate();
    const backRouter = useBackNavigation();
    const {tema} = useContext(ThemeContext);
    const {quantidade , alterarQuantidade} = useContext(PlayerQuantidadeContext);
    const {setPlayers} = useContext(PlayerContext);


    return (
        <section className={`relative h-screen w-full ${tema === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-black'}`}>
            <section className="absolute top-[2%] -translate-y-[2%] px-2">
                <BackButton onClick={backRouter}/>
            </section>

            <section className="absolute top-[5%] -translate-y-[2%] left-[50%] -translate-x-[50%]">
                <h2>Jogo</h2>
            </section>
        </section>
    )
}