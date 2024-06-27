import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import CharacterGender from "../characters/CharacterGender";
import CharacterStatus from "../characters/CharacterStatus";
import {
  CHARACTERS_URL as url,
  CHARACTERS_NAV_URL as navUrl,
} from "../../data";

export default function Character(id) {
  const [data, setData] = useState({});
  id = useParams().id ? useParams().id : id;
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios
        .get(`${url}/${id}`)
        .then((response) => {
          setData(response.data);
          //console.log(response.data);
        })
        .catch((error) => {
          setData({});
          navigate(navUrl, { replace: true });
        });
    } else {
      navigate(navUrl, { replace: true });
    }
  }, [id]);

  const { image, name, status, species, gender, origin, location, episode } =
    data;

  return (
    <div
      key={id}
      className="w-[50%] flex flex-col lg:flex-row justify-start p-5 gap-3 bg-slate-700 text-slate-50 rounded-3xl shadow-black shadow-md"
    >
      <img
        className="rounded-3xl shadow-black shadow-md"
        width={300}
        height={300}
        src={image}
        alt="image"
      />

      <div className="flex flex-col items-start justify-start">
        <h1 className="text-xl font-bold flex flex-row">
          {name}
          <span className="flex justify-center items-center">
            {gender && <CharacterGender gender={gender} />}
          </span>
        </h1>
        <p>
          <span className="font-semibold">ID:</span> {id}
        </p>
        <p className="flex justify-center items-center">
          <span className="font-semibold">Status: </span>
          {status && <CharacterStatus status={status} />}
        </p>
        <p>
          <span className="font-semibold">Species:</span> {species}
        </p>
        {origin && (
          <p>
            <span className="font-semibold">Origin:</span> {origin.name}
          </p>
        )}
        {location && (
          <p>
            <span className="font-semibold">Location:</span> {location.name}
          </p>
        )}
      </div>
    </div>
  );
}
