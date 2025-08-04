import { CiTrophy } from "react-icons/ci";
import { PiMedal } from "react-icons/pi";
import { CiFlag1 } from "react-icons/ci";

export function IconResult ({posicao}){


    let icon ;


    if (posicao === 1){
        icon = <CiTrophy />
    }

    else if (posicao === 2 || posicao === 3){
        icon = <PiMedal />
    }

   
    else {
        icon = <CiFlag1 />
    }



    return (
        <section>
            {icon}
        </section>
    )
}