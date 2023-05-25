import "./Episodes.css"
import { useEffect } from "react"
import Episode from "./Episode"

const loadEpisodes = () => {
    let list = []
    for (let id = 1; id <= 51; id++) {
        list.push(Episode(id));
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