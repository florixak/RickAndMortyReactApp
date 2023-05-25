import "./Characters.css"
import { useEffect } from "react"
import Character from "./Character"

const loadCharacters = () => {
    let list = []
    for (let id = 1; id <= 826; id++) {
        list.push(Character(id));
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