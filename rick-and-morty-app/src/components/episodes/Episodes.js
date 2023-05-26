import EpisodeData from "./EpisodeData"
import "./Episodes.css"
import { useEffect } from "react"

const loadEpisodes = () => {
    let list = []
    for (let id = 1; id <= 51; id++) {
        list.push(EpisodeData(id));
    }
    return list
}

const Episodes = () => {

    useEffect(() => {
        document.title = "Rick and Morty | Episodes"
    }, [])

    return (
        <div className="episodes">
            {
                loadEpisodes()
            }
        </div>
    )
}
export default Episodes