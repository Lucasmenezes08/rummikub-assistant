import ConfirmButton from "../components/common/button-confirm";
import DarkThemeButton from "../components/common/button-darkTheme";

export default function Homepage (){
    return (
        <section>
            <section>
                <DarkThemeButton/>
            </section>

            <section>
                <h1>Assistente Rummikub</h1>
            </section>


            <section>
                <ConfirmButton/>
            </section>
        </section>
        
    )
}