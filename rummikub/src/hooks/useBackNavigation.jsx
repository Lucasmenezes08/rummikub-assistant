import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../store/playerInfo";

export default function useBackNavigation (){
    const navigate = useNavigate();
    function handleBack (){
       
        navigate(-1);     
    }
    return handleBack;
}