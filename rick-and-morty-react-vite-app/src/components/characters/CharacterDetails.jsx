import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
  CHARACTERS_URL as url,
  CHARACTERS_NAV_URL as navUrl,
} from "../../data";

import CharacterGender from "./CharacterGender";
import CharacterStatus from "./CharacterStatus";
import CharacterImage from "./CharacterImage";
import CharacterDetailsSkeleton from "./CharacterDetailsSkeleton";
import CharacterOrigin from "./CharacterOrigin";
import CharacterSpecies from "./CharacterSpecies";
import CharacterLocation from "./CharacterLocation";
import CharacterID from "./CharacterID";

export default function CharacterDetails({ id }) {
  const [loading, setLoading] = useState(false);
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
      setData({});
    }
  }, [id]);

  const { image, name, status, species, gender, origin, location, episode } =
    data;

  if (loading) {
    return <CharacterDetailsSkeleton />;
  }

  return (
    <div className="flex flex-col md:flex-row justify-start p-5 gap-3 bg-slate-700 text-slate-50 rounded-3xl shadow-black shadow-md">
      <CharacterImage image={image} name={name} />
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-xl font-bold flex flex-row">
          {name}
          <CharacterGender gender={gender} />
        </h1>
        <CharacterID id={id} />
        <CharacterStatus status={status} />
        <CharacterSpecies species={species} />
        <CharacterOrigin origin={origin} />
        <CharacterLocation location={location} />
      </div>
    </div>
  );
}
