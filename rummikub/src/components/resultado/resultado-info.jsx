import { IconResult } from "./icon-resultado"

export function ResultadoPlayer ({player , rank}) {

    return (
        <section className="flex flex-row justify-between items-center px-5 mb-9">
            <section className="flex flex-row items-center">
                <section className="flex items-center justify-center w-[3rem] h-[3rem] rounded-lg bg-gray-500 mr-5">
                    <IconResult posicao={rank}/>
                </section>
                
                <section>
                    <p className="font-medium text-lg">{player.name}</p>
                    <p className="font-light text-md text-gray-100">Score: {player.scoreTotal}</p>
                </section>

            </section>
            <p>{rank}º posição</p>
        </section>
    )
}