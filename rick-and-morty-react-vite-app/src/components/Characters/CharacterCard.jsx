import Card from "../Card";
import { Link } from "react-router-dom";
import CharacterStatus from "./CharacterStatus";
import CharacterGender from "./CharacterGender";

export default function CharacterCard({ data }) {
  const { image, name, id, status, species, gender, origin, location } = data;

  return (
    <Card>
      <Link to={`/character/${id}`}>
        <img
          className="rounded-3xl shadow-black shadow-md"
          width={300}
          height={300}
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
      </Link>
    </Card>
  );
}
