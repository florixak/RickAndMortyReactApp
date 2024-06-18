import { useState } from "react";
import CharacterCard from "./CharacterCard";
import { CHARACTERS_URL } from "../../data";
import CardList from "../CardList";
import { useParams } from "react-router-dom";

export default function Characters() {
  const [data, setData] = useState([]);
  const { characterId } = useParams();

  const filteredData = characterId
    ? data.filter((character) => character.id === parseInt(characterId))
    : data;

  return (
    <CardList title="Characters" handleData={setData} url={CHARACTERS_URL}>
      {filteredData.map((character) => (
        <CharacterCard key={character.id} data={character} />
      ))}
    </CardList>
  );
}
