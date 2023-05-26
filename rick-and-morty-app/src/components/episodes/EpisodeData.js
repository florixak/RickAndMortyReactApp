import { useState, useEffect } from "react"

const url = "https://rickandmortyapi.com/api/episode/"

const EpisodeData = (idEp) => {

    const [ id, setID] = useState(idEp)
    const [ name, setName] = useState("Loading...")
    const [ airDate, setAirDate] = useState("Unknown")
    const [ episode, setEpisode] = useState("Unknown")

    useEffect( () => {
        fetch(url + idEp)
        .then( (response) => response.json() )
        .then( (data) => {
            setID(data.id)
            setName(data.name)
            setAirDate(data.air_date)
            setEpisode(data.episode)
        })
    }, [idEp])

    return (
        <div key={id} className="episode">
            <ul>
                <li><span className="character-info">{episode}</span></li>
                <li><span className="character-info">Name:</span> {name}</li>
                <li><span className="character-info">Air date:</span> {airDate}</li>
            </ul>
        </div>
        
    )
}

export default EpisodeData