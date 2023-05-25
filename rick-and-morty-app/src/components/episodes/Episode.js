import { useState, useEffect } from "react"

const url = "https://rickandmortyapi.com/api/episode/"

const Episode = (idEp) => {

    const [ id, setId ] = useState(0)
    const [ name, setName] = useState("Unknown")
    const [ airDate, setAirDate] = useState("Unknown")
    const [ episode, setEpisode] = useState("Unknown")

    useEffect( () => {
        fetch(url + idEp)
        .then( (response) => response.json() )
        .then( (data) => {
            setId(data.id)
            setName(data.name)
            setAirDate(data.air_date)
            setEpisode(data.episode)
        })
    }, [idEp])

    return (
        <div key={id} className="episode">
            <ul>
                <li><span className="character-info">{name}</span></li>
                <li><span className="character-info">Episode:</span> {episode}</li>
                <li><span className="character-info">Air date:</span> {airDate}</li>
            </ul>
        </div>
        
    )
}

export default Episode