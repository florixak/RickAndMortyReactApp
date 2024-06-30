export default function CharacterOrigin({ origin }) {
  if (!origin) return null;
  return (
    <p>
      <span className="font-semibold">Origin:</span> {origin.name}
    </p>
  );
}
