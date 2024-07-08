export default function CharacterID({ id }) {
  if (!id) return null;
  return (
    <p>
      <span className="font-semibold">ID:</span> {id || "Loading..."}
    </p>
  );
}
