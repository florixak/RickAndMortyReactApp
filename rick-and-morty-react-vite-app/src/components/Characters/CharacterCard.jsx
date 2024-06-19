import Card from "../Card";
import CharacterStatus from "./CharacterStatus";
import CharacterGender from "./CharacterGender";

export default function CharacterCard({ data }) {
  const { image, name, id, status, species, gender, origin, location } = data;

  return (
    <Card>
      <img className="rounded-3xl shadow-black shadow-md" src={image} alt="image" />
      <h1 className="text-xl font-bold flex flex-row">{name} <span className="flex justify-center items-center"><CharacterGender gender={gender} /></span></h1>
      <div className="flex flex-col items-start justify-start">
        <p>ID: {id}</p>
        <p className="flex justify-center items-center">Status: <CharacterStatus status={status} /></p>
        <p>Species: {species}</p>
        {origin && <p>Origin: {origin.name}</p>}
        {location && <p>Location: {location.name}</p>}
      </div>
    </Card>
  );
}
