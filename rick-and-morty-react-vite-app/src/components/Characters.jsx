import axios from "axios";
import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Character from "./Character";

const baseURL = "https://rickandmortyapi.com/api/character";
const itemsPerPage = 12;

export default function Characters() {
  const { page } = useParams(); // Získání aktuální stránky z URL parametrů
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios.get(`${baseURL}?page=${page}`).then((response) => {
      setData(response.data.results.slice(0, itemsPerPage)); // Oříznout výsledky na 10 postav
      setInfo(response.data.info);
    });
  }, [page]);

  const getNextPage = () => {
    return parseInt(page) + 1;
  };

  const getPreviousPage = () => {
    return parseInt(page) - 1;
  };

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <h1>Characters</h1>
      <div className="grid grid-cols-4 grid-rows-2 gap-10">
        {data.map((character) => (
          <Character key={character.id} data={character} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-10 mt-4">
        <button className="border-b-4 p-2">
          <NavLink
            to={
              info.prev
                ? `/characters/${getPreviousPage()}`
                : `/characters/${info.pages}`
            }
          >
            Previous
          </NavLink>
        </button>

        <button className="border-b-4 p-2">
          <NavLink
            to={info.next ? `/characters/${getNextPage()}` : `/characters/1`}
          >
            Next
          </NavLink>
        </button>
      </div>
    </div>
  );
}
