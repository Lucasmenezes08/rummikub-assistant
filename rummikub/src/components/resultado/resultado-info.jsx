import { IconResult } from "./icon-resultado"

export function ResultadoPlayer ({player , rank}) {

    return (
        <section>
            <section>
                <IconResult posicao={rank}/>
                <section>
                    <p>{player.name}</p>
                    <p>Score: {player.scoreTotal}</p>
                </section>

                <p>{rank}º posição</p>
            </section>
        </section>
    )
}