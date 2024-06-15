import axios from "axios";
import { useState } from "react";
import Character from "./Character";

export default function Characters() {
  const [data, setData] = useState([]);

  const loadCharacters = () => {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      setData(response.data);
      console.log(data);
    });
  };

  loadCharacters();

  return (
    <div className="w-full flex justify-center">
      <h1>Characters</h1>
      {data.map((char, index) => {
        <Character id={index} />
      })}
    </div>
  );
}
