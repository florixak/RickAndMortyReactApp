
const getYear = () => {
    var date = new Date();
    return date.getFullYear()
}

const data = {
    author: "FloriXak",
    author_website: "https://www.florixak.tk/",
    rick_and_morty_api: "https://rickandmortyapi.com/",
    date: getYear(),
    characters_api_url: "https://rickandmortyapi.com/api/character",
    locations_api_url: "https://rickandmortyapi.com/api/location",
    episodes_api_url: "https://rickandmortyapi.com/api/episode"
}

export default data