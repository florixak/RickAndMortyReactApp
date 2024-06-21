import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { CHARACTERS_URL as url, CHARACTERS_NAV_URL } from "../../data";
import Card from "../Card";
import CharacterGender from "./CharacterGender";
import CharacterStatus from "./CharacterStatus";

export default function Character(id = 1) {
  const [data, setData] = useState({});
  id = useParams().id ? useParams().id : id;
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios
        .get(`${url}/${id}`)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          setData({});
          navigate(CHARACTERS_NAV_URL, { replace: true });
        });
    } else {
      navigate(CHARACTERS_NAV_URL, { replace: true });
    }
  }, [id]);

  const { image, name, status, species, gender, origin, location } = data;
  return (
    <Card>
      <img
        className="rounded-3xl shadow-black shadow-md"
        src={image}
        alt="image"
      />
      <h1 className="text-xl font-bold flex flex-row">
        {name}
        <span className="flex justify-center items-center">
          <CharacterGender gender={gender} />
        </span>
      </h1>
      <div className="flex flex-col items-start justify-start">
        <p>
          <span className="font-semibold">ID:</span> {id}
        </p>
        <p className="flex justify-center items-center">
          <span className="font-semibold">Status:</span>{" "}
          <CharacterStatus status={status} />
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
    </Card>
  );
}
