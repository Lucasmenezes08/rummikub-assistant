import { CiDark } from "react-icons/ci";

export default function DarkThemeButton ({onClick}){
    return (
        <section>
            <button><CiDark onClick={onClick} size={40} className="bg-gray-600 rounded-2xl"/></button>
        </section>
    )
}