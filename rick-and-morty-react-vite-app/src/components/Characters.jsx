import axios from "axios";
import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Character from "./Character";

const baseURL = "https://rickandmortyapi.com/api/character";

export default function Characters() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`${baseURL}/${id}`).then((response) => {
      setData(response.data);
      console.log(data + data.length);
    });
  }, [id]);

  const getNextPage = () => {
    if (parseInt(id) === 10) return 1;
    return parseInt(id) + 1;
  };

  const getPreviousPage = () => {
    if (parseInt(id) <= 1) return 10;
    return parseInt(id) - 1;
  };

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <h1>Characters</h1>
      <Character data={data} />
      <div className="flex justify-center items-center gap-10">
        <button className="border-b-4 p-2">
          <NavLink to={`/characters/${getPreviousPage()}`}>Previous</NavLink>
        </button>
        <button className="border-b-4 p-2">
          <NavLink to={`/characters/${getNextPage()}`}>Next</NavLink>
        </button>
      </div>
    </div>
  );
}
