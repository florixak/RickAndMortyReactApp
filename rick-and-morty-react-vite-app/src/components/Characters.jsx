import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Character from "./Character";

const baseURL = "https://rickandmortyapi.com/api/character";
const itemsPerPage = 12;

export default function Characters() {
  const { page } = useParams(); // Získání aktuální stránky z URL parametrů
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios.get(`${baseURL}?page=${page}`).then((response) => {
      setData(response.data.results.slice(0, itemsPerPage)); // Oříznout výsledky na 10 postav
      setInfo(response.data.info);
      console.log(response.data.results);
      console.log(response.data.info);
    });
  }, [page]);

  const getNextPage = () => {
    if (page === undefined || page === "NaN") return 2;
    return parseInt(page) + 1;
  };

  const getPreviousPage = () => {
    if (page === undefined || page === "NaN") return info.pages;
    return parseInt(page) - 1;
  };

  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <h1>Characters</h1>
      <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
        {data.map((character) => (
          <Character key={character.id} data={character} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-10">
        <button
          className="border-b-4 p-2"
          onClick={() =>
            navigate(
              info.prev
                ? `/characters/${getPreviousPage()}`
                : `/characters/${info.pages}`,
              { replace: true }
            )
          }
        >
          Previous
        </button>

        <button
          className="border-b-4 p-2"
          onClick={() =>
            navigate(
              info.next ? `/characters/${getNextPage()}` : `/characters/1`,
              { replace: true }
            )
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}
