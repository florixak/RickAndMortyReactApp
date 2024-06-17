import { useState } from "react";
import Location from "./Location";
import { LOCATIONS_URL } from "../../data";
import CardList from "../CardList";

export default function Locations() {
  const [data, setData] = useState([]);

  return (
    <CardList title="Locations" handleData={setData} url={LOCATIONS_URL}>
      {data.map((location) => (
        <Location key={location.id} data={location} />
      ))}
    </CardList>
  );
}
