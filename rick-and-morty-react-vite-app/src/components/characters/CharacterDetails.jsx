import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
  CHARACTERS_URL as url,
  CHARACTERS_NAV_URL as navUrl,
} from "../../utils.js";

import CharacterTitle from "./information/CharacterTitle";
import CharacterStatus from "./information/CharacterStatus";
import CharacterImage from "./information/CharacterImage";
import CharacterDetailsSkeleton from "./skeleton/CharacterDetailsSkeleton";
import CharacterOrigin from "./information/CharacterOrigin";
import CharacterSpecies from "./information/CharacterSpecies";
import CharacterLocation from "./information/CharacterLocation";
import CharacterID from "./information/CharacterID";
import CharacterEpisodes from "./information/CharacterEpisodes";
import Error from "../errors/Error.jsx";

export default function CharacterDetails() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let timer = null;
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${url}/${id}`);
        setData(response.data);
        setError(null);
      } catch (err) {
        setError({ message: "Failed to fetch data." });
      } finally {
        timer = setTimeout(() => setLoading(false), 1500);
      }
    };

    if (id) {
      fetchData();
    } else {
      navigate(navUrl, { replace: true });
    }

    return () => {
      clearTimeout(timer);
    };
  }, [id, navigate]);

  const { image, name, status, species, gender, origin, location, episode } =
    data;

  if (loading) {
    return <CharacterDetailsSkeleton />;
  }

  if (error) {
    return <Error>{error.message}</Error>;
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
