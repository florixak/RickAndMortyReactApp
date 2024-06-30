import Card from "../Card";
import CharacterGender from "../characters/CharacterGender";
import CharacterStatus from "../characters/CharacterStatus";
import CharacterImage from "../characters/CharacterImage";
import CharacterOrigin from "./CharacterOrigin";
import CharacterSpecies from "./CharacterSpecies";
import CharacterLocation from "./CharacterLocation";
import CharacterID from "./CharacterID";

export default function CharacterCard({ data }) {
  const { image, name, id, status, species, gender, origin, location } = data;

  return (
    <Card type={"characters"} id={id}>
      <CharacterImage image={image} name={name} />
      <h1 className="text-xl font-bold flex flex-row">
        {name}
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
