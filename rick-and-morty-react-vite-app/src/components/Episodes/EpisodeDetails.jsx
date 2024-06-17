import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EPISODES_URL } from "../../data";
import Episode from "./Episode";

export default function LocationDetails() {
  const { episodeId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`${EPISODES_URL}/${episodeId}`).then((response) => {
      setData(response.data);
      console.log(data);
    });
  }, [episodeId]);

  return (
    <Episode data={data} />
  );
}
