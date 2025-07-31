import { GoArrowLeft } from "react-icons/go";


export default function BackButton ({onClick}){
    return (
        <button onClick={onClick}>
            <GoArrowLeft size={35}/>
        </button>
    )
}