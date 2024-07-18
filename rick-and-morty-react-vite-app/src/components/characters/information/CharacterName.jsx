export default function CharacterName({ name }) {
  return (
    <span className="text-2xl font-bold text-light-green">
      {name || "Loading..."}
    </span>
  );
}
