import CharacterData from "./CharacterData";
import "./Characters.css"
import { useEffect } from "react"

const loadCharacters = (idCh) => {
    if (idCh !== null && idCh && undefined && idCh <= 0) {
        return CharacterData(idCh);
    }
    let list = []
    for (let id = 1; id <= 286; id++) {
        list.push(CharacterData(id));
    }
    
    return list
}

const Characters = () => {

    useEffect(() => {
        document.title = "Rick and Morty | Characters"
    }, [])

    return (
        <section className="characters-section">
        
            <label htmlFor="character-id">ID: </label>
            <input type="number" name="char-name" id="char-id" placeholder="Character ID"/>
            
            <div className="characters">
                {
                    loadCharacters(0)
                }
            </div>
        </section>
        
    )
}
export default Characters