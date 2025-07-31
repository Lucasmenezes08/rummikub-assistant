import BackButton from "../components/common/button-back";
import useBackNavigation from "../hooks/useBackNavigation";


export default function QuantidadePlayer () {
    const backRouter = useBackNavigation()


    return (
        <section>
            <section>
                <BackButton onClick={backRouter}/>
            </section>


            
        </section>
    )
}