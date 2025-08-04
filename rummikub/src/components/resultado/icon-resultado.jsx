import { CiTrophy } from "react-icons/ci";
import { PiMedal } from "react-icons/pi";
import { CiFlag1 } from "react-icons/ci";

export function IconResult ({posicao}){


    let icon ;


    if (posicao === 1){
        icon = <CiTrophy size={30}/>
    }

    else if (posicao === 2 || posicao === 3){
        icon = <PiMedal size={30}/>
    }

   
    else {
        icon = <CiFlag1 size={30} />
    }



    return (
        <section className="text-black">
            {icon}
        </section>
    )
}