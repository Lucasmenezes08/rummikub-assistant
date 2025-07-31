import { useNavigate } from "react-router-dom";

export default function useBackNavigation (){
    const navigate = useNavigate();
    function handleBack (){
        navigate(-1);
    }
    return handleBack;
}