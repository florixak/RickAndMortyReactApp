import Card from "../Card";
import CharacterGender from "./information/CharacterGender";
import CharacterStatus from "./information/CharacterStatus";
import CharacterImage from "./information/CharacterImage";
import CharacterName from "./information/CharacterName";
import CharacterOrigin from "./information/CharacterOrigin";
import CharacterSpecies from "./information/CharacterSpecies";
import CharacterLocation from "./information/CharacterLocation";
import CharacterID from "./information/CharacterID";

export default function CharacterCard({ data }) {
  const { image, name, id, status, species, gender, origin, location } = data;

  return (
    <Card type={"characters"} id={id}>
      <CharacterImage image={image} name={name} />
      <h1 className="text-xl font-bold flex flex-row">
        <CharacterName name={name} />
        <CharacterGender gender={gender} />
      </h1>
      <div className="flex flex-col items-start justify-start">
        <CharacterID id={id} />
        <CharacterStatus status={status} />
        <CharacterSpecies species={species} />
        <CharacterOrigin origin={origin} />
        <CharacterLocation location={location} />
      </div>
    </Card>
  );
}
