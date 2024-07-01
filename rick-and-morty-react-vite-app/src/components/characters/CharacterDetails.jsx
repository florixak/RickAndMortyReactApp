import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
  CHARACTERS_URL as url,
  CHARACTERS_NAV_URL as navUrl,
} from "../../data";

import CharacterTitle from "./information/CharacterTitle";
import CharacterStatus from "./information/CharacterStatus";
import CharacterImage from "./information/CharacterImage";
import CharacterDetailsSkeleton from "./skeleton/CharacterDetailsSkeleton";
import CharacterOrigin from "./information/CharacterOrigin";
import CharacterSpecies from "./information/CharacterSpecies";
import CharacterLocation from "./information/CharacterLocation";
import CharacterID from "./information/CharacterID";
import CharacterEpisodes from "./information/CharacterEpisodes";
import Error from "../Error"

export default function CharacterDetails({ id }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState({});
  id = useParams().id ? useParams().id : id;
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [id]);

  useEffect(() => {
    try {
      if (id) {
        axios.get(`${url}/${id}`).then((response) => {
          setData(response.data);
          //console.log(response.data);
        });
      } else {
        navigate(navUrl, { replace: true });
      }
    } catch (e) {
      setError({ message: "Failed to fetch data." });
      setData({});
    }
  }, [id]);

  const { image, name, status, species, gender, origin, location, episode } =
    data;

  if (loading) {
    return <CharacterDetailsSkeleton />;
  }

  if (error) {
    return <Error>{error.message}</Error>
  }

  return (
    <div className="flex flex-col lg:flex-row justify-start p-5 gap-3 bg-slate-700 text-slate-50 rounded-3xl shadow-black shadow-md">
      <CharacterImage image={image} name={name} />
      <div className="flex flex-col items-start justify-start">
        <CharacterTitle name={name} gender={gender} />
        <CharacterID id={id} />
        <CharacterStatus status={status} />
        <CharacterSpecies species={species} />
        <CharacterOrigin origin={origin} />
        <CharacterLocation location={location} />
        <CharacterEpisodes episode={episode} />
      </div>
    </div>
  );
}
