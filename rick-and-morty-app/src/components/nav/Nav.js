import "./Nav.css"

import npm_api_logo from "../../images/ram-api-logo.png";
import florix_logo from "../../images/florix-logo.jpg";


const Nav = () => {

    return (
        <div className="nav">
            <img src={npm_api_logo} alt="" title="Rick and Morty API" onClick={() => {window.open("https://rickandmortyapi.com/")}} />
            <img src={florix_logo} alt="" title="Creator" onClick={() => {window.open("https://www.florixak.tk/")}} />
        </div>
    )
}

export default Nav