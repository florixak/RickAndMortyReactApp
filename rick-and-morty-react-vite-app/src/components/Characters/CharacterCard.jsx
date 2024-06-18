import Card from "../Card";
import CharacterStatus from "./CharacterStatus";

export default function CharacterCard({ data }) {
  const { image, name, id, status, species, gender, origin, location } = data;

  return (
    <Card>
      <img className="rounded-3xl" src={image} alt="image" />
      <h1 className="text-xl">{name}</h1>
      <div className="flex flex-col items-start justify-start">
        <p>ID: {id}</p>
        <p>Status: <CharacterStatus status={status} /></p>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        {origin && <p>Origin: {origin.name}</p>}
        {location && <p>Location: {location.name}</p>}
      </div>
    </Card>
  );
}
