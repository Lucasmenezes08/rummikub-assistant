export default function ScoreInput ({value , onChange}){
    return (
        <section>
            <input type="text" placeholder="Insira o score" maxLength={4} onChange={onChange} value={value}/>
        </section>
    )
}