import axios from "axios";
import { useEffect, useState } from "react";

export default function Character(id) {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/" + id)
        .then((response) => {
        setData(response.data);
        console.log(data);
      });
  }, [id]);

  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
}
