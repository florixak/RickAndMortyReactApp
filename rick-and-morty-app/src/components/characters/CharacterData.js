import { useState, useEffect } from "react"

const url = "https://rickandmortyapi.com/api/character/"

const CharacterData = (idCh) => {

    const [ id, setID ] = useState(-1)
    const [ img, setImg ] = useState("")
    const [ name, setName] = useState("Loading...")
    const [ status, setStatus] = useState("Unknown")
    const [ species, setSpecies] = useState("Unknown")
    const [ gender, setGender] = useState("Unknown")
    const [ location, setLocation ] = useState("Unknown")

    useEffect( () => {
        fetch(url + idCh)
        .then( (response) => response.json() )
        .then( (data) => {
            setID(data.id)
            setImg(data.image)
            setName(data.name)
            setStatus(data.status)
            setSpecies(data.species)
            setGender(data.gender)
            setLocation(data.origin.name)
        })
    }, [idCh])

    return (
        <div key={id} className="character">
            <img src={img} alt=""/>
            <ul>
                <li><span className="character-info">{name}</span> </li>
                <li><span className="character-info">Status:</span> {status}</li>
                <li><span className="character-info">Species:</span> {species}</li>
                <li><span className="character-info">Gender:</span> {gender}</li>
                <li><span className="character-info">From:</span> {location}</li>
            </ul>
        </div>
        
    )
}

export default CharacterData