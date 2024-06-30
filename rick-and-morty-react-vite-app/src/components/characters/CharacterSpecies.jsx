export default function CharacterSpecies({ species }) {
  if (!species) return null;
  return (
    <p>
      <span className="font-semibold">Species:</span> {species}
    </p>
  );
}
