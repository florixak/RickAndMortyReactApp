import CharacterStatus from "./CharacterStatus";

export default function CharacterSpecies({ species, status }) {
  if (!species) return null;
  return (
    <p className="flex flex-row items-center">
      <p>
        <span className="font-semibold">Species:</span> {species}
      </p>
      <CharacterStatus status={status} />
    </p>
  );
}
