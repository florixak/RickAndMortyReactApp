import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CHARACTERS_URL } from "../../data";
import Character from "./Character";

export default function CharacterDetails() {
  const { characterId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`${CHARACTERS_URL}/${characterId}`).then((response) => {
      setData(response.data);
      console.log(data);
    });
  }, [characterId]);

  return (
    <Character data={data} />
  );
}
