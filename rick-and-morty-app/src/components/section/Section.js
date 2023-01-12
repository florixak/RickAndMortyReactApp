import "./Section.css"

const Section = () => {

    return (
        <div className="section">
            <ul className="list">
                <li className="list-item" onClick={() => console.log("Selected Characters")}>
                    <h2>Characters</h2>
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/56d919f9-4e96-439e-a08a-9a9a2b86b063/deme498-32e3aad6-5973-4caf-b700-6821482e51ae.png/v1/fill/w_1280,h_1567,strp/rick_and_morty___rick_sanchez___blah__blah__blu__l_by_rickyfl1975_deme498-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU2ZDkxOWY5LTRlOTYtNDM5ZS1hMDhhLTlhOWEyYjg2YjA2M1wvZGVtZTQ5OC0zMmUzYWFkNi01OTczLTRjYWYtYjcwMC02ODIxNDgyZTUxYWUucG5nIiwiaGVpZ2h0IjoiPD0xNTY3Iiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNTZkOTE5ZjktNGU5Ni00MzllLWEwOGEtOWE5YTJiODZiMDYzXC9yaWNreWZsMTk3NS00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.m56vrdEN4Cmi-_QtrISS-JckoFY7O-JOQCfWk0wb-e4" alt="" />
                </li>
                <li className="list-item" onClick={() => console.log("Selected Locations")}>
                    <h2>Locations</h2>
                    <img src="https://canada1.discourse-cdn.com/free1/uploads/lookmumnocomputer/original/2X/6/6138ebc04594d92d90ac3651124c04d3d3dc5503.jpeg" alt="" />
                </li> 
                <li className="list-item" onClick={() => console.log("Selected Episodes")}>
                    <h2>Episodes</h2>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Rick_and_Morty_season_4.jpg/250px-Rick_and_Morty_season_4.jpg" alt="" />
                </li>
            </ul>
        </div>
    )
}

export default Section