import "./Footer.css"

const Footer = () => {

    const getYear = () => {
        var date = new Date();
        return date.getFullYear()
    }

    return (
        <div className="footer">
            <p>Using <a href="https://rickandmortyapi.com/" target="blank">Rick and Morty API</a></p>
            <p>{getYear()}</p>
            <p>Created by <a href="https://florixak.tk/" target="blank">FloriX</a></p>
        </div>
    )
}

export default Footer