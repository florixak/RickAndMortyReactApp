import { useState } from "react";
import Character from "./Character";
import { CHARACTERS_URL } from "../../data";
import CardList from "../CardList";

export default function Characters() {
  const [data, setData] = useState([]);

  return (
    <CardList title="Characters" handleData={setData} url={CHARACTERS_URL}>
      {data.map((character) => (
        <Character key={character.id} data={character} />
      ))}
    </CardList>
  );
}
