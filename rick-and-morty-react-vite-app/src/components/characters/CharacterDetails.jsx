import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  CHARACTERS_URL as url,
  CHARACTERS_NAV_URL as navUrl,
  getEpisodeURL
} from "../../data";

import CharacterGender from "./information/CharacterGender";
import CharacterStatus from "./information/CharacterStatus";
import CharacterImage from "./information/CharacterImage";
import CharacterDetailsSkeleton from "./skeleton/CharacterDetailsSkeleton";
import CharacterOrigin from "./information/CharacterOrigin";
import CharacterSpecies from "./information/CharacterSpecies";
import CharacterLocation from "./information/CharacterLocation";
import CharacterID from "./information/CharacterID";
import CharacterName from "./information/CharacterName";

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
          <CharacterName name={name} />
          <CharacterGender gender={gender} />
        </h1>
        <CharacterID id={id} />
        <CharacterStatus status={status} />
        <CharacterSpecies species={species} />
        <CharacterOrigin origin={origin} />
        <CharacterLocation location={location} />

        <div className="flex flex-wrap gap-2 max-w-[300px]">
          Episodes:
          {episode && episode.map((ep) => {
            const episodeNum = ep.match(/\/(\d+)$/)[1];
            return (
              <span onClick={() => navigate(getEpisodeURL(episodeNum))} key={ep} className="hover:cursor-pointer hover:underline">{episodeNum}</span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
