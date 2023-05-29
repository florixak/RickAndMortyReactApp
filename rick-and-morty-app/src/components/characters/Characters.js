import CharacterData from "./CharacterData";
import "./Characters.css"
import { useEffect, useState } from "react"

const loadCharacters = (idCh) => {
    if (idCh !== null && idCh > 0) {
        return CharacterData(idCh);
    }
    let list = []
    for (let id = 1; id <= 286; id++) {
        list.push(CharacterData(id));
    }
    
    return list
}

const Characters = () => {

    const [character, setCharacter ] = useState(0);

    useEffect(() => {
        document.title = "Rick and Morty | Characters"
    }, [])

    const handleChange = (event) => {
        setCharacter(event.target.value);
        alert(event.target.value);
    }

    return (
        <section className="characters-section">
            <form action="">
                <label htmlFor="char-id">ID: </label>
                <input type="number" id="char-id" placeholder="Character ID" onChange={handleChange}/>
            </form>
            
            
            <div className="characters">
                {
                    loadCharacters(character)
                }
            </div>
        </section>
        
    )
}
export default Characters