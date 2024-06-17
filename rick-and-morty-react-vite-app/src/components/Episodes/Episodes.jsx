import { useState } from "react";
import Episode from "./Episode";
import { EPISODES_URL } from "../../data";
import CardList from "../CardList";

export default function Characters() {
  const [data, setData] = useState([]);

  return (
    <CardList title="Episodes" handleData={setData} url={EPISODES_URL}>
      {data.map((episode) => (
        <Episode key={episode.id} data={episode} />
      ))}
    </CardList>
  );
}
