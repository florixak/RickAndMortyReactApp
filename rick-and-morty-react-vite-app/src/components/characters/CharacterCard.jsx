import Card from "../Card";
import CharacterTitle from "./information/CharacterTitle";
import CharacterImage from "./information/CharacterImage";
import CharacterSpecies from "./information/CharacterSpecies";
import CharacterCardSkeleton from "./skeleton/CharacterCardSkeleton";
import Detail from "../details/Detail";

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
        <div className="flex max-w-[250px] flex-col items-start justify-start text-secondary">
          <Detail label="ID" value={id} />
          <CharacterSpecies species={species} status={status} />
          <Detail label="Origin" value={origin && origin.name} />
          <Detail
            label="Last Known Location"
            value={location && location.name}
          />
        </div>
      </div>
    </Card>
  );
}
