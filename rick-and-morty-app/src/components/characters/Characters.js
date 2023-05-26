import CharacterData from "./CharacterData";
import "./Characters.css"
import { useEffect } from "react"

const loadCharacters = () => {
    let list = []
    for (let id = 1; id <= 826; id++) {
        list.push(CharacterData(id));
    }
    return list
}

const Characters = () => {

    useEffect(() => {
        document.title = "Rick and Morty | Characters"
    }, [])

    return (
        <div className="characters">
            {
                loadCharacters()
            }
        </div>
    )
}
export default Characters