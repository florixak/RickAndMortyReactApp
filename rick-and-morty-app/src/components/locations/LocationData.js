import { useState, useEffect } from "react"

const url = "https://rickandmortyapi.com/api/location/"

const LocationData = (idLoc) => {

    const [ id, setID] = useState(-1)
    const [ name, setName] = useState("Unknown")
    const [ type, setType] = useState("Unknown")
    const [ dimension, setDimension] = useState("Unknown")

    useEffect( () => {
        fetch(url + idLoc)
        .then( (response) => response.json() )
        .then( (data) => {
            setID(data.id)
            setName(data.name)
            setType(data.type)
            setDimension(data.dimension)
        })
    }, [idLoc])

    return (
        <div className="location">
            <ul>
                <li><span className="location-info">{name}</span></li>
                <li><span className="location-info">Type:</span> {type}</li>
                <li><span className="location-info">Dimension:</span> {dimension}</li>
            </ul>
        </div>
        
    )
}

export default LocationData