import "./Nav.css"

const Nav = () => {

    return (
        <div className="nav">
            <img onClick={() => {window.open("https://rickandmortyapi.com/")}} src="https://repository-images.githubusercontent.com/120371205/b6740400-92d4-11ea-8a13-d5f6e0558e9b" alt="" />
            <img src="https://cdnb.artstation.com/p/assets/images/images/039/019/641/large/trinh-minh-duc-dame.jpg?1624719508" alt="" />
        </div>
    )
}

export default Nav