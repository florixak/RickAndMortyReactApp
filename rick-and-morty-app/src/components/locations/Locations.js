import "./Locations.css"
import { useEffect } from "react"
import LocationData from "./LocationData"

const loadLocations = () => {
    let list = []
    for (let id = 1; id <= 126; id++) {
        list.push(LocationData(id));
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