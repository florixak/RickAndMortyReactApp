import Card from "../Card";
import CharacterTitle from "./information/CharacterTitle";
import CharacterImage from "./information/CharacterImage";
import CharacterOrigin from "./information/CharacterOrigin";
import CharacterSpecies from "./information/CharacterSpecies";
import CharacterLocation from "./information/CharacterLocation";
import CharacterID from "./information/CharacterID";
import CharacterCardSkeleton from "./skeleton/CharacterCardSkeleton";

export default function CharacterCard({ data, isLoading }) {
  const { image, name, id, status, species, gender, origin, location } = data;

  if (isLoading || !data) {
    return <CharacterCardSkeleton />;
  }

  return (
    <Card type="characters" id={id}>
      <div className="flex flex-col gap-3">
        <CharacterImage image={image} name={name} />
        <CharacterTitle name={name} gender={gender} />
        <div className="max-w-[250px] flex flex-col items-start justify-start text-secondary">
          <CharacterID id={id} />
          <CharacterSpecies species={species} status={status} />
          <CharacterOrigin origin={origin} />
          <CharacterLocation location={location} />
        </div>
      </div>
    </Card>
  );
}
