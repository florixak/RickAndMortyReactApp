import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LOCATIONS_URL } from "../../data";
import Location from "./Location";

export default function LocationDetails() {
  const { locationId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`${LOCATIONS_URL}/${locationId}`).then((response) => {
      setData(response.data);
      console.log(data);
    });
  }, [locationId]);

  return (
    <Location data={data} />
  );
}
