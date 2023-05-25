import { useState, useEffect } from "react"

const url = "https://rickandmortyapi.com/api/location/"

const Location = (idLoc) => {

    const [ name, setName] = useState("Unknown")
    const [ type, setType] = useState("Unknown")
    const [ dimension, setDimension] = useState("Unknown")

    useEffect( () => {
        fetch(url + idLoc)
        .then( (response) => response.json() )
        .then( (data) => {
            setName(data.name)
            setType(data.type)
            setDimension(data.dimension)
        })
    }, [idLoc])

    return (
        <div className="character">
            <ul>
                <li><span className="location-info">{name}</span></li>
                <li><span className="location-info">Type:</span> {type}</li>
                <li><span className="location-info">Dimension:</span> {dimension}</li>
            </ul>
        </div>
        
    )
}

export default Location