import Card from "../Card";
import CharacterTitle from "./information/CharacterTitle";
import CharacterStatus from "./information/CharacterStatus";
import CharacterImage from "./information/CharacterImage";
import CharacterOrigin from "./information/CharacterOrigin";
import CharacterSpecies from "./information/CharacterSpecies";
import CharacterLocation from "./information/CharacterLocation";
import CharacterID from "./information/CharacterID";

export default function CharacterCard({ data }) {
  const { image, name, id, status, species, gender, origin, location } = data;

  return (
    <Card type={"characters"} id={id}>
      <CharacterImage image={image} name={name} />
      <CharacterTitle name={name} gender={gender} />
      <div className="max-w-[250px] flex flex-col items-start justify-start text-secondary">
        <CharacterID id={id} />
        <CharacterStatus status={status} />
        <CharacterSpecies species={species} />
        <CharacterOrigin origin={origin} />
        <CharacterLocation location={location} />
      </div>
    </Card>
  );
}
