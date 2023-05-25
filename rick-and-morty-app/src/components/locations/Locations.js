import "./Locations.css"
import { useEffect } from "react"
import Location from "./Location"

const loadLocations = () => {
    let list = []
    for (let id = 1; id <= 126; id++) {
        list.push(Location(id));
    }
    return list
}

const Locations = () => {

    useEffect(() => {
        document.title = "Rick and Morty | Locations"
    }, [])

    return (
        <div className="locations">
            {
                loadLocations()
            }
        </div>
    )
}
export default Locations