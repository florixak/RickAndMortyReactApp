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
        <p><span className="font-bold">ID:</span> {id}</p>
        <p className="flex justify-center items-center"><span className="font-bold">Status:</span> <CharacterStatus status={status} /></p>
        <p><span className="font-bold">Species:</span> {species}</p>
        {origin && <p><span className="font-bold">Origin:</span> {origin.name}</p>}
        {location && <p><span className="font-bold">Location:</span> {location.name}</p>}
      </div>
    </Card>
  );
}
