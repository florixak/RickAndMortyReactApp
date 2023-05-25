import "./Nav.css"

import { Link } from "react-router-dom"

import npm_api_logo from "../../images/ram-api-logo.png";
import florix_logo from "../../images/florix-logo.jpg";


const Nav = () => {

    return (
        <div className="nav">
            <div className="nav-left">
                <p><Link to="/">Home</Link></p>
            </div>
            <div className="nav-right">
                <img src={npm_api_logo} alt="" title="Rick and Morty API" onClick={() => {window.open("https://www.rickandmortyapi.com/")}} />
                <img src={florix_logo} alt="" title="Creator" onClick={() => {window.open("https://www.florixak.tk/")}} />
            </div>
            
        </div>
    )
}

export default Nav